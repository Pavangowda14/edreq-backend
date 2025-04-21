import { Course } from "../models/courseModel.js";
import { Lesson } from "../models/lessonModel.js";
import { User } from "../models/userModel.js";
import { Section } from "../models/sectionModel.js";
import { Video } from "../models/videoModel.js";

export const createLesson = async (req, res) => {
  try {
    const { courseId, title, description, videoLink, lessonNo } = req.body;
    if (!courseId || !title || !description || !videoLink || !lessonNo) {
      return res.status(400).json({
        message: "some fields are missing",
        success: false,
      });
    }
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(400).json({
        message: "course not found",
        success: false,
      });
    }

    const lesson = await Lesson.create({
      title,
      description,
      videoLink,
      course: course._id,
      lessonNo,
    });
    return res.status(201).json({
      message: "lesson created successfully",
      lesson,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const fetchSections = async (req, res) => {
  try {
    const courseId = req.params.id;
    if (!courseId) {
      return res.status(400).json({
        message: "some fields are missing",
        success: false,
      });
    }

    const user = await User.findById(req.user._id);
    const lessons = await Course.findById(courseId)
      .populate({
        path: "sectionContent",
        populate: {
          path: "videos", // Populate videos inside sections
        },
      })
      .exec();
    if (user.role == "admin") {
      return res.status(200).json({
        lessons,
        success: true,
      });
    }
    if (!user.coursesEnrolled.includes(courseId)) {
      return res.status(400).json({
        message: "you are not enrolled",
        success: false,
      });
    }

    return res.status(200).json({
      lessons,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: error.message,
      success: false,
    });
  }
};

export const fetchSectionData = async (req, res) => {
  try {
    const sectionId = req.params.id;
    if (!sectionId) {
      return res.status(400).json({
        message: "some fields are missing",
        success: false,
      });
    }

    const user = await User.findById(req.user._id);
    const section = await Section.findById(sectionId)
      .populate("videos") // Populating the video references
      .populate("studyMaterials");

    const courseId = section.course;

    // Check if the user is an admin
    if (user.role === "admin") {
      return res.status(200).json({
        section,
        success: true,
      });
    }

    // Check if the user is enrolled in the course
    if (!user.coursesEnrolled.includes(courseId)) {
      return res.status(403).json({
        message: "You are not enrolled in this course",
        success: false,
      });
    }

    return res.status(200).json({
      section,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: error.message,
      success: false,
    });
  }
};

export const fetchVideo = async (req, res) => {
    try {
        const videoId = req.params.id;

        if (!videoId) {
            return res.status(400).json({
                success: false,
                message: "Video ID is required",
            });
        }

        // Find video by ID
        const video = await Video.findById(videoId);

        if (!video) {
            return res.status(404).json({
                success: false,
                message: "Video not found",
            });
        }

        res.status(200).json({
            success: true,
            video,
        });
    } catch (error) {
        console.error("Error fetching video details:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
  };