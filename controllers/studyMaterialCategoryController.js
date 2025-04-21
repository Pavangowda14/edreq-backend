import { StudyMaterialCategory } from "../models/studyMaterialCategoryModel.js";

export const createStudyMaterialCategory=async(req,res)=>{
    try {
        const {categoryName}=req.body;
        console.log(categoryName);
        
        if (!categoryName){
            return res.status(400).json({
                message:"category field is required",
                success:false
            })
        };
        const cat=await StudyMaterialCategory.findOne({categoryName});
        if (cat){
            return res.status(400).json({
                message:"category already exists",
                success:false
            })
        }
        await StudyMaterialCategory.create({categoryName})
        return res.status(201).json({
            message:"category created",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}