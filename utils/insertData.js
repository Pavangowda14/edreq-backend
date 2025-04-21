import mongoose from "mongoose";
import { Section } from "../models/sectionModel.js";
import { Video } from "../models/videoModel.js"; 
import { Course } from "../models/courseModel.js";

const MONGO_URI = "mongodb+srv://pavangowda1414:Pavangowda14@cluster0.mgm5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.error("MongoDB Connection Error ❌", err));

const insertSubject = async () => {
    try {
        const newSubject = new Section({
            name: "Mathematics",
            course:"66f1a8beaa9dabd46c07cef7"
        });

        await newSubject.save();
        console.log("Section Inserted ✅");
    } catch (error) {
        console.error("Insertion Error ❌", error);
    } finally {
        mongoose.connection.close(); 
    }
};

const insertVideo = async () => {
    try {
        const newVideo = new Video({
            title: "chapter 3",
            videoLink: "https://www.youtube.com/embed/7hzbLqx_s2k?si=kHIya3I750UD6OVg",
            lessonNo: 3,
            Section: "67d25e8c422d9e68d4053e2b",
        });

        await newVideo.save();
        console.log("Video Inserted Successfully ✅");
    } catch (error) {
        console.error("Insertion Error ❌", error);
    } finally {
        mongoose.connection.close(); // Close connection after insertion
    }
};

const insertCourse = async () => {
    try {
        // ✅ Step 1: Create Course First
        const newCourse = new Course({
            title: "CBSE 6 2025 Batch",
            description: "Class 6 curriculum",
            thumbnail:"https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            price:"5000",
            category: "66e9cb09873a1e668fa4cb9c",
            createdBy: "Admin"
        });

        await newCourse.save(); // Save course first
        console.log("Course Inserted ✅", newCourse._id);
    } catch (error) {
        console.error("Insertion Error ❌", error);
    } finally {
        mongoose.connection.close(); // Close connection after insertion
    }
};



insertCourse()
// insertVideo();
// insertSubject();
