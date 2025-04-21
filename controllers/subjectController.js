import { Subject } from "../models/subjectModel.js";

export const createSubject=async (req,res)=>{
    try {
        const {subjectName}=req.body;
        if (!subjectName){
            return res.status(400).json({
                message:"subject name is missing",
                success:false
            })
        }
        const sub=await Subject.findOne({subjectName})
        
        if(sub){
            return res.status(400).json({
                message:"subject already exists",
                success:false
            })
        }
        await Subject.create({subjectName})
        return res.status(201).json({
            message:`subject ${subjectName} created`,
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}