import { Course } from "../models/courseModel.js";
import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";

export const createCourse=async(req,res)=>{
    try{
        const { categoryId,title,description,price,thumbnail,duration }=req.body;
        if (!categoryId || !title || !description){
            return res.status(400).json({
                message:"some fields are missing",
                success:false
            })
        }
        const cat=await Category.findById(categoryId)
        if (!cat){
            return res.status(400).json({
                message:"category not found",
                success:false
            })
        }
        const course=await Course.create({
            title,
            description,
            price,
            thumbnail,
            duration,
            category:cat._id,
        })
        return res.status(201).json({
            message:"course created successfully",
            course,
            sucess:true
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}

export const getAllCourses=async(req,res)=>{
    try {
        const courses=await Course.find().select("_id category").populate("category","categoryName").sort({ "category.categoryName": 1 });
        return res.status(200).json({
            courses,
            success:true
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

export const getCourseById=async(req,res)=>{
    try {
        const courseId=req.params.id;
        if(!courseId){
            return res.status(400).json({
                message:"some field are missing",
                success:false
            })
        }
        const course=await Course.findById(courseId).populate("category");
        if(!course){
            return res.status(404).json({
                message:"course not found",
                success:false
            })
        }
        return res.status(200).json({
            course,
            success:true,
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            success:false,
        })
    }
}

export const getMyCourses=async(req,res)=>{
    try {
        
        const courses=await Course.find({_id:req.user.coursesEnrolled});

        return res.status(200).json({
            success:true,
            courses
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }   
}

export const enrollInFreeCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
  
      // Find course
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({ success: false, message: "Course not found" });
      }
  
      // Check if course is free
      if (course.price > 0) {
        return res.status(400).json({ success: false, message: "This course is not free" });
      }
  
      // Get user
      const user = await User.findById(req.id);
      if (!user) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
      }
      // Check if already enrolled
      if (user.coursesEnrolled.includes(courseId)) {
        return res.status(200).json({ success: true, message: "Already enrolled in this course" });
      }
  
      // Enroll user
      user.coursesEnrolled.push(courseId);
      await user.save();
  
      res.status(200).json({
        success: true,
        message: "Successfully enrolled in the free course",
      });
    } catch (error) {
      console.error("Enroll error:", error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };