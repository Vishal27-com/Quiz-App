const express=require("express");
const { registerUser, loginUser, getUser, updateUser, getAllUser, deleteUser } = require("../Controller/user.controller");
const { authmiddleware } = require("../Middleware/authmiddleware");
const app=express.Router();
app.post("/signup",registerUser);
app.post("/login",loginUser);
app.get("/:id",authmiddleware,getUser);
app.get("/",authmiddleware,getAllUser);
app.patch("/:id",authmiddleware,updateUser);
app.delete("/:id",authmiddleware,deleteUser);
module.exports=app;
