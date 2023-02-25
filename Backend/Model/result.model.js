const mongoose=require("mongoose");
const resultSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    type:{type:String,required:true},
    level:{type:String,required:true},
    score:{type:Number,required:true},
    mm:{type:Number,required:true}
},{timestamps:true})
const Result=mongoose.model("result",resultSchema);
module.exports=Result;