const mongoose =require("mongoose");
const dbConnect=()=>{
    try {
        mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports=dbConnect;