import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    videoLink: { type: String, required: true },
    lessonNo: { type: Number, required: true },
    Section: { type: mongoose.Schema.Types.ObjectId, ref: "Section", required: true },
    createdAt: { type: Date, default: Date.now }
});


export const Video = mongoose.model("Video", videoSchema);
