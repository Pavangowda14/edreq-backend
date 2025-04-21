import express from "express"
import { isAdmin, isAuthenticated } from "../middlewares/isAuthenticated.js"
import { createStudyMaterial, getAllStudyMaterial, getAllStudyMaterialByClass, getStudyMaterialById } from "../controllers/studyMaterialController.js"

const router=express.Router()

router.route("/study-material/add").post(isAuthenticated,isAdmin,createStudyMaterial)
router.route("/study-materials").get(getAllStudyMaterial)
router.route("/study-material/:id").get(getAllStudyMaterialByClass)
router.route("/study-material-view/:id").get(getStudyMaterialById)

export default router;