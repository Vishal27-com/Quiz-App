require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors");
const cookieParser=require("cookie-parser");
const dbConnect=require("./db");
const authRouter=require("./Routes/user.routes");
const quizRouter=require("./Routes/quiz.routes");
const resultRouter=require("./Routes/result.routes");

const corsConfig = {
  origin: "https://quizester.netlify.app",
  allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
  credentials: true,
  exposedHeaders: ['*', 'Authorization' ]
}

app.use(cors(corsConfig))
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => res.send("Welcome To Quiz App Server"));
app.use("/auth",authRouter);
app.use("/quiz",quizRouter);
app.use("/result",resultRouter);
dbConnect();
app.listen(process.env.PORT, () => {
  console.log("server started on port 8080");
});
