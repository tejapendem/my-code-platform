// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function ResetPassword() {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const email = localStorage.getItem("resetEmail");
//   const resetToken = localStorage.getItem("resetToken"); // ✅ use resetToken, not OTP

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setMessage("Passwords do not match");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/auth/reset-password", {
//         email,
//         newPassword,
//         resetToken, // ✅ send resetToken instead of OTP
//       });

//       // cleanup storage
//       localStorage.removeItem("resetEmail");
//       localStorage.removeItem("resetToken");

//       setMessage("Password reset successful! Redirecting...");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Password reset failed");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-black/80 p-8 shadow-lg rounded-2xl w-full max-w-md text-center"
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-white">Reset Password</h2>

//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="border p-2 w-full mb-3 rounded text-gray-900 dark:text-white
//              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//              bg-white dark:bg-gray-700"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           className="border p-2 w-full mb-3 rounded text-gray-900 dark:text-white
//              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//              bg-white dark:bg-gray-700"
//           required
//         />

//         <button
//           type="submit"
//           className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
//         >
//           Reset Password
//         </button>

//         {message && (
//           <p className="mt-2 text-sm text-red-500">{message}</p>
//         )}
//       </form>
//     </div>
//   );
// }
