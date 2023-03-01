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
const getQuestionById=async (req,res)=>{
    try {
        const question=await Quiz.findById(req.params.id);
        res.status(200).send({message:question,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
const getAllQuestions=async (req,res)=>{
    try {
        const {type,level,sortby,page,limit}=req.query;
        const sortval=sortby==="asc"?1:-1
        const count=await Quiz.count();
        let query=type==="all" && level==="all"?{}:
        type!=="all" && level=="all" ?{type}:
        type=="all" && level!=="all" ?{level}:{type,level}
        const ques=await Quiz.find(query).sort({createdAt:sortval}).skip((page-1)*limit).limit(limit);
        res.status(200).send({message:ques,count,error:false})
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
module.exports={postQuestion,getQuestions,getQuestionById,getAllQuestions,updateQuestion,deleteQuestion};