import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
 
export default  async function  connection (){
{
    
try{

    mongoose.connect(process.env.MONGODB_URL);

    console.log("mongoDB connected successfully");
}
catch(error){
    console.log("mongoDB connection error", error)
}
}

}