import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  studyMaterials: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Study_Material" },
  ],
  createdAt: { type: Date, default: Date.now },
});

export const Section = mongoose.model("Section", sectionSchema);
