import express from "express"
import mongoose from "mongoose";
import { shortUrl ,getOriginalUrl} from "./controllers/url.js";

const app= express();
app.use(express.urlencoded({extended:true}))

mongoose.connect(
    "mongodb+srv://lodhivishal286:P3okeCmcNaWnb8C0@cluster0.r60fqto.mongodb.net/", {
    dbName: "NodeJs_mastery_course"
}).then(() => console.log("mongodb connected")).catch((err) => console.log(err)
)
//rendering the ejs file

app.get('/',(req,res)=>{
    res.render("index.ejs",{shortUrl:null});

})

//sorting url logic:

app.post('/short',shortUrl)

//dynamic route: 
//redirect to original url using short code
app.get("/:shortCode",getOriginalUrl)
const port =1000;
app.listen(port,()=>console.log("server is running"))