const express=require("express");
const { postQuestion, getQuestions, updateQuestion, deleteQuestion } = require("../Controller/quiz.controller");
const app=express.Router();
app.post("/",postQuestion)
app.get("/",getQuestions)
app.patch("/:id",updateQuestion)
app.delete("/:id",deleteQuestion)
module.exports=app;
