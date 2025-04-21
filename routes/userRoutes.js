import express from "express";
import { login,register,logout, verifyToken, verifyEmail, addProfileDetails, fetchProfileDetails, changePassword } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/verify-email").post(verifyEmail);
router.route("/change-password").post(isAuthenticated,changePassword);
router.route("/user/profile").put(isAuthenticated ,addProfileDetails);
router.route("/user/profile").get(isAuthenticated, fetchProfileDetails);
router.route("/verify-token").get(verifyToken);

export default router;