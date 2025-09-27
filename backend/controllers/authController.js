import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendOTPEmail } from "../utils/email.js";
import crypto from "crypto";
// export const signup = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const hashed = await bcrypt.hash(password, 10);
//     const user = await User.create({ username, email, password: hashed });
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "User not found" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: "Invalid password" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// Signup
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashed });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Step 1: Request OTP
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
    user.resetOTP = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // 10 min expiry
    await user.save();

    // Send OTP email
    await sendOTPEmail(email, otp);

    res.status(200).json({ message: "OTP sent to email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};

// Step 2: Verify OTP
// export const verifyOTP = async (req, res) => {
//   const { email, otp } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "Email not found" });

//     if (!user.resetOTP) return res.status(400).json({ message: "No OTP requested" });

//     if (user.resetOTP !== otp.toString())
//       return res.status(400).json({ message: "Invalid OTP" });

//     if (user.otpExpiry < new Date())
//       return res.status(400).json({ message: "OTP expired" });

//     res.status(200).json({ message: "OTP verified" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// Step 3: Reset password
// export const resetPassword = async (req, res) => {
//   const { email, otp, newPassword } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });
//     if (user.resetOTP !== otp) return res.status(400).json({ message: "Invalid OTP" });
//     if (user.otpExpiry < Date.now()) return res.status(400).json({ message: "OTP expired" });

//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     user.password = hashedPassword;
//     user.resetOTP = null;
//     user.otpExpiry = null;
//     await user.save();

//     res.status(200).json({ message: "Password updated successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };




export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email not found" });

    if (!user.resetOTP) return res.status(400).json({ message: "No OTP requested" });
    if (user.resetOTP !== otp.toString())
      return res.status(400).json({ message: "Invalid OTP" });
    if (user.otpExpiry < new Date())
      return res.status(400).json({ message: "OTP expired" });

    // ✅ generate a resetToken
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 min
    user.resetOTP = null; // clear OTP after verification
    user.otpExpiry = null;
    await user.save();

    res.status(200).json({ message: "OTP verified", resetToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
export const resetPassword = async (req, res) => {
  const { email, newPassword, resetToken } = req.body;  // ✅ use resetToken
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.resetToken || user.resetToken !== resetToken)
      return res.status(400).json({ message: "Invalid or missing reset token" });

    if (user.resetTokenExpiry < Date.now())
      return res.status(400).json({ message: "Reset token expired" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    // clear resetToken after successful reset
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};





