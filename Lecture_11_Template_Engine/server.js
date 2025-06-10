import express from "express";
const app=express();
const port =1000;

app.get('/',(req,res)=>{
    //it directly fetches the file form Views folder.

    let name='Ram';

    let products=[
        {
            title:'iphone-12',price:45500
        },
        {
            title:'samsung',price:5000
        },
        {
            title:"realme",price:50000
        }, 
    ]

    res.render('index.ejs',{name,products})
})

app.listen(port,()=>console.log("server started"));