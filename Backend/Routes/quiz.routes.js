const express=require("express");
const { postQuestion, getQuestions, updateQuestion, deleteQuestion, getAllQuestions, getQuestionById } = require("../Controller/quiz.controller");
const app=express.Router();
app.post("/",postQuestion)
app.get("/",getQuestions)
app.get("/all",getAllQuestions)
app.get("/question/:id",getQuestionById)
app.patch("/:id",updateQuestion)
app.delete("/:id",deleteQuestion)
module.exports=app;
