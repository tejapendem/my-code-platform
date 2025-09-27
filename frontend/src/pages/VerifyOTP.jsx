
// // import { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // export default function VerifyOTP() {
// //   const [otp, setOtp] = useState("");
// //   const [message, setMessage] = useState("");
// //   const navigate = useNavigate();
// //   const email = localStorage.getItem("resetEmail");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post("http://localhost:5000/api/auth/verify-otp", { email, otp });
// //       navigate("/reset-password");
// //     } catch (err) {
// //       setMessage(err.response?.data?.message || "OTP verification failed");
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen px-4">
// //       <form onSubmit={handleSubmit} className="bg-white/80 p-8 shadow-lg rounded-2xl w-full max-w-md text-center">
// //         <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
// //         <input
// //           type="text"
// //           placeholder="Enter OTP"
// //           value={otp}
// //           onChange={(e) => setOtp(e.target.value)}
// //           className="border p-2 w-full mb-3 rounded"
// //           required
// //         />
// //         <button type="submit" className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
// //           Verify OTP
// //         </button>
// //         {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
// //       </form>
// //     </div>
// //   );
// // }



// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function VerifyOTP() {
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [timer, setTimer] = useState(600); // 10 min expiry (600 seconds)
//   const [message, setMessage] = useState("");
//   const inputRefs = useRef([]);
//   const navigate = useNavigate();
//   const email = localStorage.getItem("resetEmail");

//   // Countdown timer
//   useEffect(() => {
//     if (timer <= 0) return;
//     const interval = setInterval(() => setTimer((t) => t - 1), 1000);
//     return () => clearInterval(interval);
//   }, [timer]);

//   // Handle input change
//   const handleChange = (value, index) => {
//     if (/^[0-9]?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (value && index < 5) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const enteredOtp = otp.join("");
//       const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
//         email,
//         otp: enteredOtp,
//       });

//       // Save resetToken
//       localStorage.setItem("resetToken", res.data.resetToken);
//       navigate("/reset-password");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "OTP verification failed");
//     }
//   };

//   const formatTime = () => {
//     const m = Math.floor(timer / 60);
//     const s = timer % 60;
//     return `${m}:${s < 10 ? "0" + s : s}`;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-black/80 p-8 shadow-lg rounded-2xl w-full max-w-md text-center"
//       >
//         <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>

//         {/* OTP boxes */}
//         <div className="flex justify-center gap-2 mb-4">
//           {otp.map((digit, i) => (
//             <input
//               key={i}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e.target.value, i)}
//               ref={(el) => (inputRefs.current[i] = el)}
//               className="w-12 h-12 text-center border rounded-lg text-xl text-gray-900 dark:text-white
//              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//              bg-white dark:bg-gray-700"
//             />
//           ))}
//         </div>

//         <p className="text-gray-600 mb-3">OTP expires in: {formatTime()}</p>

//         <button
//           type="submit"
//           className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
//         >
//           Verify OTP
//         </button>

//         {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
//       </form>
//     </div>
//   );
// }
