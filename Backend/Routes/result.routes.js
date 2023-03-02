const express=require("express");
const { postResult, getResults, deleteResult, leaderBoardResult } = require("../Controller/result.controller");
const { authmiddleware } = require("../Middleware/Authmiddleware");
const app=express.Router();
app.use(authmiddleware);
app.post("/",postResult)
app.get("/:userId",getResults)
app.get("/",leaderBoardResult)
app.delete("/:id",deleteResult)
module.exports=app;
