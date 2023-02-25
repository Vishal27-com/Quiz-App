const express=require("express");
const { postResult, getResults, deleteResult, leaderBoardResult } = require("../Controller/result.controller");
const app=express.Router();
app.post("/",postResult)
app.get("/:userId",getResults)
app.get("/leaderboard",leaderBoardResult)
app.delete("/:id",deleteResult)
module.exports=app;
