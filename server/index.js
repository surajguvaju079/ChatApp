import express from "express";
import dotenv from "dotenv";
import { ConnectMongodb } from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({});
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URI, credentials: true }));
app.use(cookieParser());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

server.listen(PORT, () => {
  ConnectMongodb();
  console.log(`Server is listening at port ${PORT}`);
});
