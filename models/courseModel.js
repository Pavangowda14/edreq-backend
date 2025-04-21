import mongoose from "mongoose";

const courseSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:false
    },
    duration:{
        type:Number,
    },
    category:{
        type:mongoose.Schema.Types.String,
        ref:"Category",
        required:true
    },
    sectionContent: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }],
    createdBy:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Course=mongoose.model("Course",courseSchema);