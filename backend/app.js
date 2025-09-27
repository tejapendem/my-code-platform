import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import roadmapRoutes from "./routes/roadmap.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/roadmap", roadmapRoutes);

export default app;

