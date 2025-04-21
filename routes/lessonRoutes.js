import express from "express";
import { isAdmin, isAuthenticated } from "../middlewares/isAuthenticated.js";
import { createLesson, fetchSectionData, fetchSections, fetchVideo } from "../controllers/lessonController.js";

const router=express.Router()

router.route("/lesson/add").post(isAuthenticated,isAdmin,createLesson);
router.route("/lessons/:id").get(isAuthenticated,fetchSections);
router.route("/section-data/:id").get(isAuthenticated,fetchSectionData);
router.route("/video-data/:id").get(isAuthenticated,fetchVideo);

export default router;