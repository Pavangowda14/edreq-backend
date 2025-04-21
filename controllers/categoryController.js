import { Category } from "../models/categoryModel.js";

export const createCategory=async(req,res)=>{
    try {
        const {categoryName}=req.body;
        if (!categoryName){
            return res.status(400).json({
                message:"category field is required",
                success:false
            })
        };
        const cat=await Category.findOne({categoryName});
        if (cat){
            return res.status(400).json({
                message:"category already exists",
                success:false
            })
        }
        await Category.create({categoryName})
        return res.status(201).json({
            message:"category created",
            success:true
        })
    } catch (error) {      
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}

export const getAllCategory=async(req,res)=>{
    try {
        const categories=await Category.find();
        return res.status(200).json({
            categories,
            success:true
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

