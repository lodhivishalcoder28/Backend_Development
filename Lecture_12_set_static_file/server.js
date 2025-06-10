import express from "express";
const app=express();
import path from 'path';

//middleware needed to connect style.css 
app.use(express.static(path.join(path.resolve(),"public")))


app.get("/",(req,res)=>{
    const products=[
    {
        title:"vishal",rollno:"450"
    },
    {
        title:"rana",rollno:"420"
    },
    {
        title:"aditya",rollno:"430"
    },
]

const name="Ram" 
    res.render("index.ejs",{products,name});
})

const port=1000;
app.listen(port,()=>console.log('server started'));
