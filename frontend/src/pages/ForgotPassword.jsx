// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
//       setMessage(res.data.message);
//       localStorage.setItem("resetEmail", email); // store email for OTP verification
//       navigate("/verify-otp"); // go to OTP verification page
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Failed to send OTP");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-4">
//       <form onSubmit={handleSubmit} className="bg-black/80 p-8 shadow-lg rounded-2xl w-full max-w-md text-center">
//         <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
//         <input
//           type="email"
//           placeholder="Enter your registered email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 w-full mb-3 rounded text-gray-900 dark:text-white
//              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//              bg-white dark:bg-gray-700"
//           required
//         />
//         <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
//           Send OTP
//         </button>
//         {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
//       </form>
//     </div>
//   );
// }



