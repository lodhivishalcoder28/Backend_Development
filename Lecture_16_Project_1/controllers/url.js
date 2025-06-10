import { url } from "../models/Url.js"
import shortid from "shortid";

export const shortUrl=async(req,res)=>{
    const longUrl = req.body.longUrl;
    const shortCode = shortid.generate();

    const shortUrl=`http://localhost:1000/${shortCode}`

    //save to database:

    const newUrl=new url({shortCode,longUrl})
    await newUrl.save();
    console.log("short Url saved",newUrl)
    res.render("index.ejs",{shortUrl});
    



}

export const getOriginalUrl= async(req,res)=>{
     const shortCode=req.params.shortCode

    //find on database: 
    const OriginalUrl = await url.findOne({shortCode})
    if(OriginalUrl){
        res.redirect(OriginalUrl.longUrl)
    }
    else{
        res.json({message:"invalid shortCode"})
    }
   

}