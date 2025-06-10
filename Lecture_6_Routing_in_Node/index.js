import http from "http";
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    // res.end("you requested");
    if(req.url==="/home"){
        res.end("welcome to Home web dev mastery");
    }
    else if(req.url==="/contact"){
        res.end("whom do you want to contact");

    }
    else{
        res.end("invalid request hai bhai");
    }
})
const port=1000; 
server.listen(1000,()=>console.log("server started"));