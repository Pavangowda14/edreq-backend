import mongoose from "mongoose";

const studyMaterialSchema=mongoose.Schema({
    classNo:{
        type:mongoose.Schema.Types.String,
        required:true,
        ref:"Category"
    },
    subject:{
        type:mongoose.Schema.Types.String,
        required:true,
        ref:"Subject",
    },
    category:{
        type:mongoose.Schema.Types.String,
        required:true,
        ref:"Study_Material_Category"
    },
    chapters:[
        {
            chapterName:{
                type:String,
                required:true
            },
            link:{
                type:String,
                required:true,
            }
        }
    ]
});

export const StudyMaterial=mongoose.model("Study_Material",studyMaterialSchema);