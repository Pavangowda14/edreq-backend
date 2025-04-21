import express from "express";
import { submitDemoRequest } from "../controllers/demoRequestController.js";

const router=express.Router()

router.route("/demo-request/submit").post(submitDemoRequest);

export default router;