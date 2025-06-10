
import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("you are requested for home route");

})

app.get("/srk",(req,res)=>{
    res.send("this is page showing srk details")
})

const port = 2000;
app.listen(port, () => console.log(`server is running on port ${port}`))