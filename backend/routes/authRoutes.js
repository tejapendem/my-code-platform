import express from "express";
import { signup, login } from "../controllers/authController.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { forgotPassword, verifyOTP, resetPassword } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);       // <-- ADD THIS
router.post("/reset-password", resetPassword); // optional if you use reset



router.post("/google", async (req, res) => {
  try {
    const { id, email, name, picture } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ username: name, email, password: "google-oauth" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: "Google login failed" });
  }
});

export default router;

