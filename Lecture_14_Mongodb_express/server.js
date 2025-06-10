import express from 'express'
import mongoose from 'mongoose';
const app = express();
const port = 1000;

mongoose.connect("mongodb+srv://lodhivishal286:P3okeCmcNaWnb8C0@cluster0.r60fqto.mongodb.net/", {
    dbName: "NodeJs mastery course"
}).then(() => console.log("mongodb connected")).catch((err) => console.log(err));

app.listen(port, () => console.log(`server is running on port ${port}`))