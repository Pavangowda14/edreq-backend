import DemoRequest from "../models/demoRequest.js";

export const submitDemoRequest = async (req, res) => {
    try {
      const { name, email, phone, classNo, message } = req.body;
      console.log(req.body)
  
      if (!name || !email || !phone || !classNo) {
        return res.status(400).json({ success: false, message: "All required fields must be filled!" });
      }
  
      const existingRequest = await DemoRequest.findOne({ email });
      if (existingRequest) {
        return res.status(400).json({ success: false, message: "You have already requested a demo session!" });
      }
  
      const newRequest = new DemoRequest({
        name,
        email,
        phone,
        classNo,
        message,
      });
  
      await newRequest.save();
      res.status(201).json({ success: true, message: "Demo session request submitted successfully!" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error!", error: error.message });
    }
  };