import express from "express"
import { isAdmin, isAuthenticated } from "../middlewares/isAuthenticated.js"
import { createSubject } from "../controllers/subjectController.js"

const router=express.Router()

router.route("/subject/add").post(isAuthenticated,isAdmin,createSubject);

export default router;