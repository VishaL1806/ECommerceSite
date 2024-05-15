import mongoose from "mongoose";

mongoose.set('strictQuery',false)

const connectDB = async () =>{
  try {
   const connection = await mongoose.connect(process.env.MONGODB_URI)
   console.warn(`Database Connected ${connection.connection.host}`)
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;