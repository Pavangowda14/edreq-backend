import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token || token === "undefined") {
      return res.status(401).json({
        message: "User not authorized. Please log in.",
        success: false,
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      return res.status(401).json({
        message: "Invalid or expired token. Please log in again.",
        success: false,
      });
    }

    req.id = decoded.userId;
    req.user = await User.findById(decoded.userId);

    if (!req.user) {
      return res.status(404).json({
        message: "User not found. Please sign up or log in again.",
        success: false,
      });
    }

    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    res.status(500).json({
      message: "Internal Server Error. Please try again later.",
      success: false,
    });
  }
};

export const isAdmin = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. You are not authorized.",
        success: false,
      });
    }

    next();
  } catch (error) {
    console.error("Authorization Error:", error);
    res.status(500).json({
      message: "Internal Server Error. Please try again later.",
      success: false,
    });
  }
};
