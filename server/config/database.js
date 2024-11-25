import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongodb_uri = process.env.MONGODB_URI;
export const ConnectMongodb = async () => {
  await mongoose
    .connect(mongodb_uri)
    .then(() => console.log("Database is connected"))
    .catch((error) => console.log("Database is not connected"));
};
