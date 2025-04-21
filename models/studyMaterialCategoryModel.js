import mongoose from "mongoose";

const studyMaterialCategorySchema=mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
export const StudyMaterialCategory=mongoose.model("Study_Material_Category",studyMaterialCategorySchema);
