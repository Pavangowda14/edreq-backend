import express from "express";
import { createCourse, enrollInFreeCourse, getAllCourses, getCourseById, getMyCourses } from "../controllers/courseController.js";
import { isAuthenticated,isAdmin } from "../middlewares/isAuthenticated.js";

const router=express.Router()

router.route("/course/add").post(isAuthenticated,isAdmin,createCourse);
router.route("/courses").get(getAllCourses);
router.route("/course/:id").get(getCourseById);
router.route("/mycourses").get(isAuthenticated,getMyCourses);
router.route("/enroll-free/:courseId").post(isAuthenticated, enrollInFreeCourse);

export default router;