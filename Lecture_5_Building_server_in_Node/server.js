import http from "http";
const server = http.createServer((req,res)=>{
    res.end("you requested for something")
});

const port=3000;
server.listen(3000,()=>console.log(`server is running on ${port}`))