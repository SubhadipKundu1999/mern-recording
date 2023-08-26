import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import mongoose from 'mongoose';

const port= 8000;
const app = express();

// middleware
app.use(express.json({extended:true}));      
app.use(express.urlencoded({ extended:true}))  
app.use(cors());  
dotenv.config();

app.get("/",(req, res)=>{
    res.send("hello world");
})

// routing
app.use("/user", userRouter);


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
app.listen(port, ()=>{
    console.log(`server is listening from ${port}`);
    console.log("mongoDB connection is successful");
})
})
.catch((error)=>{
    console.log("connection error: ", error.message)
})
// app.listen(port,()=>{
//     console.log("server running");
// })