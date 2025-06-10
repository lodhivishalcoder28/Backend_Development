import express, { raw } from "express";
const app=express();


//C=create=>POST method
//R=Read=> GET method
//U=Update => PUT method
//D=Delete => DELETE method

app.get("/vishal",(req,res)=>{
    res.send("this is response")
})

app.post('/instagram_post',(req,res)=>{
    //post 
})

app.listen(2000,()=>console.log("server started"));
