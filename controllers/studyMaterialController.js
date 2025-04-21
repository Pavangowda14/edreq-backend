import { Category } from "../models/categoryModel.js";
import { Subject } from "../models/subjectModel.js";
import { StudyMaterialCategory } from "../models/studyMaterialCategoryModel.js"
import { StudyMaterial } from "../models/studyMaterialModel.js";

export const createStudyMaterial=async(req,res)=>{
    try {
        const {classNo,subject,category,chapters}=req.body;
        if(!classNo || !subject || !category || !chapters){
            return res.status(400).json({
                message:"some fields are missing",
                success:false
            })
        }
        const cNo=await Category.findById(classNo)
        if(!cNo){
            return res.status(400).json({
                message:"class not found",
                success:false
            })
        }
        const sub=await Subject.findById(subject)
        if(!sub){
            return res.status(400).json({
                message:"subject not found",
                success:false
            })
        }
        const cat=await StudyMaterialCategory.findById(category)
        if(!cat){
            return res.status(400).json({
                message:"category not found",
                success:false
            })
        }
        const material=await StudyMaterial.create({classNo,subject,category,chapters})
        return res.status(201).json({
            message:"study material created successfully",
            material,
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}

export const getAllStudyMaterial=async(req,res)=>{
    try {
        const materials=await StudyMaterial.find().populate("classNo").populate("subject").populate("category")
        return res.status(200).json({
            materials,
            success:true
        })
    } catch (error) {
        return res.status(200).json({
            message:error.message,
            success:false
        })
    }
}

export const getAllStudyMaterialByClass=async(req,res)=>{
    try {
        const classNo=req.params.id;
        
        if(!classNo){
            return res.status(400).json({
                message:"some field are missing",
                success:false
            })
        }
        const materials=await StudyMaterial.find({classNo}).populate("classNo").populate("subject").populate("category");
        if(!materials){
            return res.status(404).json({
                message:"study materials not found",
                success:false
            })
        }
        return res.status(200).json({
            materials,
            success:true,
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            success:false,
        })
    }
}

export const getStudyMaterialById=async(req,res)=>{
    try {
        const materialId=req.params.id;
        if(!materialId){
            return res.status(400).json({
                message:"some field are missing",
                success:false
            })
        }
        const material=await StudyMaterial.findById(materialId).populate("classNo").populate("subject").populate("category");
        if(!material){
            return res.status(404).json({
                message:"course not found",
                success:false
            })
        }
        return res.status(200).json({
            material,
            success:true,
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            success:false,
        })
    }
}