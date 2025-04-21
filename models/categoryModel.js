import mongoose from "mongoose";

const categorySchema=mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
export const Category=mongoose.model("Category",categorySchema);