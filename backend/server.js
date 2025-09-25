import app from "./app.js";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import roadmapRoutes from "./routes/roadmap.js";

dotenv.config();

// Middleware
app.use(cors()); // allow frontend requests
app.use(express.json());

// Routes
app.use("/api/roadmap", roadmapRoutes);

// DB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
