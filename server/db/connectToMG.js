import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToMG = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export default connectToMG;
