const jwt=require("jsonwebtoken");
const User=require("../Model/auth.model");
const bcrypt=require("bcrypt");
const registerUser=async (req,res)=>{
    try {
        const {username,email,password}=req.body;
        const saltRounds=5;
        bcrypt.hash(password, saltRounds,async (err, hashed_password) =>{
            if(err){       
             res.status(500).send({message:err.message,error:true});
              }
            else {
                const user= await new User({username,email,password:hashed_password});
                user.save();
                res.status(200).send({message:"Registered Successfully",error:false});
            }
        });
        
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
                    const token=jwt.sign({email,password},process.env.SECRET_KEY);
                    res.cookie("access_token",token).status(200).send({message:"Login Successfully",error:false});  
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

module.exports={registerUser,loginUser};