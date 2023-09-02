import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGOOSE_URL);
    console.log("Connection successfull");
  } catch (error) {
    console.log("error while connecting to the DB: ", error);
  }
};

export default connectDB;
