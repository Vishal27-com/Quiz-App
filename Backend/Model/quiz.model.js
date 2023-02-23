const mongoose=require("mongoose");
const quizSchema=new mongoose.Schema({
    type:{type:String,required:true},
    level:{type:String,required:true},
    question:{type:String,required:true},
    answer:{type:String,required:true},
    option:{type:Array,required:true},
    // reason:{type:String,required:true}
})
const Quiz=mongoose.model("quiz",quizSchema);
module.exports=Quiz;