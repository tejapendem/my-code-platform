// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email:    { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// export default mongoose.model("User", userSchema);


// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// // Prevent OverwriteModelError
// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;





import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    githubId: { type: String }, // ✅ store GitHub user ID
    avatarUrl: { type: String },
    resetOTP: { type: String },
    otpExpiry: { type: Date },

    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
  },
  { timestamps: true }
);

// Prevent OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", userSchema);


export default User;

