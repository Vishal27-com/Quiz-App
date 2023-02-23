const express=require("express");
const { registerUser, loginUser, getUser, updateUser } = require("../Controller/user.controller");
const app=express.Router();
app.post("/signup",registerUser);
app.post("/login",loginUser);
app.get("/:id",getUser);
app.patch("/:id",updateUser);
module.exports=app;
