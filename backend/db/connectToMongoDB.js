import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("database is connected");
  } catch (error) {
    console.log("Error connection to MongoDB", error);
  }
};

export default connectToMongoDB;
