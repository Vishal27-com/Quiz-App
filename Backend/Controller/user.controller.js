const jwt=require("jsonwebtoken");
const User=require("../Model/user.model");
const bcrypt=require("bcrypt");
const registerUser=async (req,res)=>{
    try {
        const {name,email,password,isAdmin}=req.body;
        const saltRounds=5;
        const user=await User.findOne({email});
        if(user)res.status(200).send({message:"Already exists",error:false});
        else{
        bcrypt.hash(password, saltRounds,async (err, hashed_password) =>{
            if(err){       
             res.status(500).send({message:err.message,error:true});
              }
            else {
                const user= await new User({name,email,password:hashed_password,isAdmin});
                user.save();
                res.status(200).send({message:"Registered Successfully",error:false});
            }
        });
    }
    } catch (error) {
        res.status(500).send({message:error.message,error:true});
    }
};
const loginUser=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            bcrypt.compare(password, user.password, (err, result)=> {
                if(result){
                    const token=jwt.sign({email:user.email,password:user.password},process.env.SECRET_KEY);
                    const {password,isAdmin,...other}=user._doc;
                    res.cookie("access_token",token).status(200).send({message:{...other,isAdmin},error:false});  
                }
                else{
                    res.status(401).send({message:"Invalid credential",error:true})
                }
            });
        }
        else{
            res.status(401).send({message:"Please create account.",error:true})
        }
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const getUser=async (req,res)=>{
try {
    const user=await User.findOne({_id:req.params.id});
    const {password,isAdmin,...other}=user._doc;
    res.status(200).send({message:{...other,isAdmin},error:false})
} catch (error) {
    res.status(500).send({message:error.message,error:true})  
}
}
const getAllUser=async (req,res)=>{
try {
    const {filterby,sortby,page,limit}=req.query;
    const sortval=sortby==="asc"?1:-1
    const count=await User.count();
    let users;
    if(filterby==="both"){
     users=await User.find({}).sort({createdAt:sortval}).skip((page-1)*limit).limit(limit);
    }
    else {
        const filterval=filterby==="user"?false:true
    users=await User.find({isAdmin:filterval}).sort({createdAt:sortval}).skip((page-1)*limit).limit(limit);
    }
    res.status(200).send({message:users,count,error:false})
} catch (error) {
    res.status(500).send({message:error.message,error:true})  
}
}
const updateUser=async (req,res)=>{
try {
    await User.findByIdAndUpdate({_id:req.params.id},{$set:req.body});
    res.status(200).send({message:"updated",error:false})
} catch (error) {
    res.status(500).send({message:error.message,error:true})  
}
}
const deleteUser=async (req,res)=>{
try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).send({message:"updated",error:false})
} catch (error) {
    res.status(500).send({message:error.message,error:true})  
}
}


module.exports={registerUser,loginUser,getUser,getAllUser,updateUser,deleteUser};