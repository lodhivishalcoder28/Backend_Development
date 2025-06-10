import express from "express";
import mongoose, { Mongoose } from "mongoose";
import multer from "multer";
const app = express();

import path from "path";



import {v2 as cloudinary} from "cloudinary";
cloudinary.config({ 
  cloud_name: 'dx6pgukan',
  api_key: '596276614357627', 
  api_secret: 'RHMrYupwsNXWdbvSYsMleWcxeUQ'
});



mongoose.connect(
    "mongodb+srv://lodhivishal286:P3okeCmcNaWnb8C0@cluster0.r60fqto.mongodb.net/", {
    dbName: "NodeJs_mastery_course"
}).then(() => console.log("mongodb connected")).catch((err) => console.log(err)
)

//rendering ejs file
app.get("/",(req,res)=>{
    res.render('index.ejs',{url:null})
})
const storage = multer.diskStorage({
  destination:'./public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname  + "-" + uniqueSuffix);
  },
})

const upload = multer({ storage: storage });

const imageSchema=new mongoose.Schema({
  filename:String,
  public_id:String,
  imgUrl:String

})
const File=mongoose.model("cloudinary",imageSchema)

app.post("/upload", upload.single("file"),async(req,res)=> {
  const file=req.file.path
  const cloudinaryRes= await cloudinary.uploader.upload(file,{
    folder:"NodeJs_mastery_course"

  })
  //save to database
  const db=await File.create({
    filename:file.originalname,
    public_id:cloudinaryRes.public_id,
    imgUrl:cloudinaryRes.secure_url
  })
  res.render("index.ejs",{url:cloudinaryRes.secure_url})
  


})
const port = 1000;
app.listen(port, () => console.log("server is running on port 1000"))