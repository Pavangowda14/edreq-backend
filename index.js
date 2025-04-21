import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import lessonRouter from "./routes/lessonRoutes.js"
import studyMaterialCategoryRouter from "./routes/studyMaterialCategoryRoutes.js";
import subjectRouter from "./routes/subjectRoutes.js";
import studyMaterialRouter from "./routes/studyMaterialRoutes.js"
import demoRequest from "./routes/demoRequestRoutes.js"
import careerRoutes from "./routes/careerRoutes.js"

dotenv.config({})


const app=express()

app.use(express.json())

app.use(express.urlencoded ({extended:true}))
app.use(cookieParser())
const corsOption={
    origin:['http://localhost:5000', 'http://localhost:5173'],
    credentials:true
}
app.use(cors(corsOption))
app.use((req, res, next) => {
    next();
});

const PORT=process.env.PORT || 5000

app.use("/api/auth",userRouter)
app.use("/api",categoryRouter)
app.use("/api",courseRouter)
app.use("/api",lessonRouter)
app.use("/api",studyMaterialCategoryRouter)
app.use("/api",subjectRouter)
app.use("/api",studyMaterialRouter)
app.use("/api",demoRequest)
app.use("/api",careerRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at ${PORT}`);
})