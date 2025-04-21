import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connection succesfull");
    }
    catch(e){
        console.log("error",e);
    }
}
export default connectDB;