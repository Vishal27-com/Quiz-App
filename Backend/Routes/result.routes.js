const express=require("express");
const { postResult, getResults, deleteResult } = require("../Controller/result.controller");
const app=express.Router();
app.post("/",postResult)
app.get("/",getResults)
app.delete("/:id",deleteResult)
module.exports=app;
