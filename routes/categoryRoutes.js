import express from "express";
import { createCategory, getAllCategory } from "../controllers/categoryController.js";
import { isAuthenticated, isAdmin } from "../middlewares/isAuthenticated.js"

const router=express.Router();

router.route("/category/add").post(isAuthenticated, isAdmin, createCategory);
router.route("/categories").get(getAllCategory);

export default router;