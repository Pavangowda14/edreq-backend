import { JobApplication } from "../models/careerModel.js";

export const applyJobApplication = async (req, res) => {
  try {
    const { name, email, phone, coverLetter } = req.body;
    const resume = req.file ? req.file.path : null;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const application = new JobApplication({
      name,
      email,
      phone,
      resume,
      coverLetter,
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
