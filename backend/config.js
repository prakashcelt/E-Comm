import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database");
  }
};

export default connectDB;
