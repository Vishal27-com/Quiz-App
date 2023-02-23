require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors");
const dbConnect=require("./db");
const authRouter=require("./Routes/user.routes");
const quizRouter=require("./Routes/quiz.routes");
const resultRouter=require("./Routes/result.routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => res.send("Welcome To Quiz App Server"));
app.use("/auth",authRouter);
app.use("/quiz",quizRouter);
app.use("/result",resultRouter);
dbConnect();
app.listen(8080, () => {
  console.log("server started on port 8080");
});
