import express from "express"
import { isAdmin, isAuthenticated } from "../middlewares/isAuthenticated.js"
import { createStudyMaterialCategory } from "../controllers/studyMaterialCategoryController.js"

const router=express.Router()

router.route("/studyMaterialCategory/add").post(isAuthenticated,isAdmin,createStudyMaterialCategory)

export default router;