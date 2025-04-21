import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js"
import { applyJobApplication } from "../controllers/careerController.js";

const router=express.Router();

router.route("/job-application").post(isAuthenticated, applyJobApplication);

export default router;