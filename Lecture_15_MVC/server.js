import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";



const app = express(); 
//middleware
app.use(express.urlencoded({extended:true}))
//mongodb connection
mongoose.connect("mongodb+srv://lodhivishal286:P3okeCmcNaWnb8C0@cluster0.r60fqto.mongodb.net/", {
    dbName: "NodeJs_mastery_course"
}).then(() => console.log("mongodb connected")).catch((err) => console.log(err))

//routes


app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post("/form-submit",userRegister)
app.listen(1000, () => console.log("server is running on port 1000"))