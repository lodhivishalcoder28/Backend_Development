import express from "express";
import mongoose, { Mongoose } from "mongoose";
import multer from "multer";
const app = express();



app.use(express.urlencoded({extended:true}))

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

//rendering  login file
app.get("/",(req,res)=>{
    res.render('login.ejs',{url:null})
})

//rendering register file

app.get("/register",(req,res)=>{
    res.render('register.ejs',{url:null})
})

const storage = multer.diskStorage({
  destination:'./public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname  + "-" + uniqueSuffix);
  },
})

const upload = multer({ storage: storage });

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
  filename:String,
  public_id:String,
  imgUrl:String

})
const User=mongoose.model("user",UserSchema)

app.post("/register", upload.single("file"),async(req,res)=> {
  const file=req.file.path;
const {name,email,password}=req.body;
  const cloudinaryRes= await cloudinary.uploader.upload(file,{
    folder:"NodeJs_mastery_course"

  })
  //creating user
  const db=await User.create({
    name,email,password,
    filename:file.originalname,
    public_id:cloudinaryRes.public_id,
    imgUrl:cloudinaryRes.secure_url
  })
 res.redirect("/");
  


})
// rendering login form
app.get("/login", (req, res) => {
  res.render("login.ejs", { url: null });
});


app.post('/login',async(req,res)=>{
    const {email,password}= req.body;
    
    
    let user= await User.findOne({email})
    if(!user) {res.render('login.ejs');}
    else if(user.password !=password) {res.render("login.ejs");}
    else{
        res.render('profile.ejs',{user})
    }
})
const port = 1000;
app.listen(port, () => console.log("server is running on port 1000"))