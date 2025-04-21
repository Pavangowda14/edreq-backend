import mongoose from "mongoose";

const demoRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    classNo: {
      type: Number,
      enum: [6, 7, 8, 9, 10, 11, 12],
      required: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const DemoRequest = mongoose.model("DemoRequest", demoRequestSchema);
export default DemoRequest;
