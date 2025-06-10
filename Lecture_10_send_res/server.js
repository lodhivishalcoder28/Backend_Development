import express from 'express'
const app=express();
import path from 'path';

//send response
const products=[
    {title:'iphone-15',price:450000},
    {title:'iphone-16',price:45230000},
    {title:'samsung',price:1450000},
    {title:'iphone-19',price:50000},
]
app.get("/",(req,res)=>{
    // JSON SEND: 
    res.json({message:'fetched all products',
        jo_chahe: "de skte hai",
        products: products,
        success: true
    })

    // HTML SEND: 

    res.send('<h1> this is your response </h1>')


    // HTML FILE: 

const dir=path.resolve(); //gives absolute path
const url=path.join(dir,'./index.html');
res.sendFile(url)


})


const port=1000;

app.listen(port, ()=>console.log("server is running on port 1000"));