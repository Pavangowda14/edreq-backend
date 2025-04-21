import mongoose from "mongoose";

const subjectSchema=mongoose.Schema({
    subjectName:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

export const Subject=mongoose.model("Subject",subjectSchema);