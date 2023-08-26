import mongoose from "mongoose";

const recordSchema = mongoose.Schema(
    {
        recordingUrl: String,
        recordingType: String,
        startTime: Date,
        endTime: Date,
        user_id:String
       
    }
)

export default mongoose.model("User", recordSchema)