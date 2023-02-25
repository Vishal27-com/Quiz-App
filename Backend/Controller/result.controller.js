const Result = require("../Model/result.model");

const postResult=async (req,res)=>{
try {
    const result=await new Result(req.body);
    result.save();
    res.status(200).send({message:"Result Posted",error:false})
} catch (error) {
    res.status(500).send({message:error.message,error:true})
}
}
const getResults=async (req,res)=>{
    try {
        const results=await Result.find({userId:req.params.userId});
        res.status(200).send({message:results,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const deleteResult=async (req,res)=>{
    try{
        await Result.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Deleted",error:false});
    }catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const leaderBoardResult=async (req,res)=>{
    try{
       let results= await Result.aggregate([{$group:{
        "userId":"$userId" , score:{$sum:"$score"} , mm:{$sum:"$mm"}
    }},
   {$sort:{score:-1}}
])
        res.status(200).send({message:results,error:false});
    }catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
module.exports={postResult,getResults,deleteResult,leaderBoardResult};