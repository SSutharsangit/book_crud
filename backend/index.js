const express =require("express");
const mongoose=require("mongoose");
const app=express();
const bookrouter=require("./routes/book");
const cors =require("cors");
// database connection
mongoose.connect("mongodb+srv://suthusutharsan2:1234@cluster0.hwy36a1.mongodb.net/")
.then(()=>{
    console.log("DB connceted successfuly");
    app.listen(5000,()=>{
        console.log("Sever running on port 5000");
    })
})
.catch((err)=>{
    console.log("something wrong in DB connection");
    console.log(err);
})
// to send json body
app.use(express.json());
// cross resourse
app.use(cors());
//book route
app.use("/book",bookrouter);
