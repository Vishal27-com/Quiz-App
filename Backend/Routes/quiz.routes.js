const express=require("express");
const { postQuestion, getQuestions, updateQuestion, deleteQuestion, getAllQuestions, getQuestionById } = require("../Controller/quiz.controller");
const { authmiddleware } = require("../Middleware/authmiddleware");
const app=express.Router();
app.use(authmiddleware);
app.post("/",postQuestion)
app.get("/",getQuestions)
app.get("/all",getAllQuestions)
app.get("/question/:id",getQuestionById)
app.patch("/:id",updateQuestion)
app.delete("/:id",deleteQuestion)
module.exports=app;
