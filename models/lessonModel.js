import mongoose from "mongoose";

const lessonSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    videoLink:{
        type:String,
        required:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true
    },
    lessonNo:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

});

export const Lesson=mongoose.model("Lesson",lessonSchema);