import mongoose from "mongoose";

const jobApplicationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  resume: String,
  coverLetter: String,
  appliedAt: { type: Date, default: Date.now },
});

export const JobApplication=mongoose.model("JobApplication",jobApplicationSchema);