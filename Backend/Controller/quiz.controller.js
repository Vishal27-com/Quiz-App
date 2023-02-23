const Quiz = require("../Model/quiz.model")

const postQuestion=async (req,res)=>{
try {
    const question=await new Quiz(req.body);
    question.save();
    res.status(200).send({message:"Question Posted",error:false})
} catch (error) {
    res.status(500).send({message:error.message,error:true})
}
}
const getQuestions=async (req,res)=>{
    try {
        const {type,level,limit}=req.query;
        const questions=await Quiz.find({level:level,type:type}).limit(limit);
        res.status(200).send({message:questions,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const updateQuestion=async (req,res)=>{
    try{
        await Quiz.findByIdAndUpdate({_id:req.params.id},{$set:req.body});
        res.status(200).send({message:"Updated",error:false});
    }catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const deleteQuestion=async (req,res)=>{
    try{
        await Quiz.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Deleted",error:false});
    }catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
module.exports={postQuestion,getQuestions,updateQuestion,deleteQuestion};