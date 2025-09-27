// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AnimatedBackground from "../components/AnimatedBackground";
// import logo from "../assets/logo.gif"; // 👈 import gif

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       setMessage("Login successful! Redirecting...");
//       setTimeout(() => navigate("/home"), 1500);
//     } catch (err) {
//       setMessage(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <AnimatedBackground variant="auth">
//       <div className="flex justify-center items-center h-screen">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/80 dark:bg-slate-900/70 p-8 shadow-lg rounded-2xl w-96 backdrop-blur text-center"
//         >
//           {/* 👇 Logo on top */}
//           <img src={logo} alt="App Logo" className="w-20 h-20 mx-auto mb-4 rounded-full" />

//           <h2 className="text-2xl font-bold mb-4">Login</h2>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="border p-2 w-full mb-3 rounded"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="border p-2 w-full mb-3 rounded"
//             onChange={handleChange}
//             required
//           />

//           <button
//             type="submit"
//             className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
//           >
//             Login
//           </button>

//           {/* Signup button */}
//           <button
//             type="button"
//             onClick={() => navigate("/signup")}
//             className="mt-3 bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
//           >
//             Signup
//           </button>

//           {message && <p className="mt-3">{message}</p>}
//         </form>
//       </div>
//     </AnimatedBackground>
//   );
// };

// export default Login;



// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AnimatedBackground from "../components/AnimatedBackground";
// import logo from "../assets/logo.png"; // main logo
// import googleLogo from "../assets/google.png"; // Google logo
// import githubLogo from "../assets/github.png"; // GitHub logo
// import secureLogo from "../assets/secure.png"; // small secure logo

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       setMessage("Login successful! Redirecting...");
//       setTimeout(() => navigate("/home"), 1500);
//     } catch (err) {
//       setMessage(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <AnimatedBackground variant="auth">
//       <div className="flex flex-col items-center justify-center min-h-screen px-4">



//         {/* Login form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/80 dark:bg-slate-900/70 p-8 shadow-lg rounded-2xl w-full max-w-md backdrop-blur text-center"
//         >
//           {/* Top secure login header with small logo */}
//         <div className="flex justify-center items-center mb-4 gap-2">
//           <img src={secureLogo} alt="Secure Logo" className="w-8 h-8" />
//           <h1 className="text-white/80">Secure Login</h1>
//         </div>

//         {/* Welcome message */}
//         <div className="text-center mb-6 max-w-md">
//           <h2 className="text-3xl font-semibold text-white mb-3">Welcome Back</h2>
//           <p className="text-white/80">Continue your learning journey with AI-powered roadmaps</p>
//         </div>

//           {/* Main logo inside form */}
//           <img src={logo} alt="App Logo" className="w-27 h-24 mx-auto mb-4 rounded-full" />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="border p-2 w-full mb-3 rounded text-gray-900 dark:text-white
//              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//              bg-white dark:bg-gray-700"
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="border p-2 w-full mb-2 rounded text-gray-900 dark:text-white
//              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//              bg-white dark:bg-gray-700"
//             onChange={handleChange}
//             required
//           />

//           {/* Forgot Password */}
//           <div className="text-right mb-4">
//             <button
//               type="button"
//               className="text-sm text-blue-600 hover:underline"
//               onClick={() => alert("Forgot Password clicked")}
//             >
//               Forgot Password?
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 mb-3"
//           >
//             Login
//           </button>

//           {/* Or continue with */}
//           <div className="flex items-center my-3">
//             <hr className="flex-1 border-t border-gray-300" />
//             <span className="px-2 text-gray-500 text-sm">Or continue with</span>
//             <hr className="flex-1 border-t border-gray-300" />
//           </div>

//           {/* Social login buttons */}
//           <div className="flex gap-4 justify-center mb-4">
//             <button className="flex items-center gap-2 border p-2 rounded w-36 justify-center hover:bg-gray-100">
//               <img src={googleLogo} alt="Google" className="w-5 h-5" />
//               Google
//             </button>
//             <button className="flex items-center gap-2 border p-2 rounded w-36 justify-center hover:bg-gray-100">
//               <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
//               GitHub
//             </button>
//           </div>

//           {message && <p className="mt-2 text-sm text-red-500">{message}</p>}

//           {/* Signup link */}
//           <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
//             Don't have an account?{" "}
//             <button
//               type="button"
//               className="text-blue-600 hover:underline"
//               onClick={() => navigate("/signup")}
//             >
//               Sign Up
//             </button>
//           </p>
//         </form>
//       </div>
//     </AnimatedBackground>
//   );
// };

// export default Login;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GoogleAuthService } from "../services/GoogleAuthService"; 
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 add icons
// import googleLogo from "../assets/google.png";
// import githubLogo from "../assets/github.png";
// import logo from "../assets/logo.png";
// import secureLogo from "../assets/secure.png";
// import AnimatedBackground from "../components/AnimatedBackground";
// import axios from "axios";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // 👈 state for toggle
//   const navigate = useNavigate();

//   useEffect(() => {
//     const googleAuth = GoogleAuthService.getInstance();
//     googleAuth.initializeGoogleAuth();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       setMessage("Login successful! Redirecting...");
//       setTimeout(() => navigate("/home"), 1500);
//     } catch (err) {
//       setMessage(err.response?.data?.error || "Login failed");
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const googleAuth = GoogleAuthService.getInstance();
//       const user = await googleAuth.signInWithGoogle();

//       const res = await axios.post("http://localhost:5000/api/auth/google", user);
//       localStorage.setItem("token", res.data.token);
//       setMessage("Google login successful! Redirecting...");
//       setTimeout(() => navigate("/home"), 1500);
//     } catch (err) {
//       console.error("Google login failed:", err);
//       setMessage("Google login failed");
//     }
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//     navigate("/forgot-password");
//   };

//   return (
//     <AnimatedBackground variant="auth">
//       <div className="flex flex-col items-center justify-center min-h-screen px-4">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/80 dark:bg-slate-900/70 p-8 shadow-lg rounded-2xl w-full max-w-md backdrop-blur text-center"
//         >
//           {/* Secure Header */}
//           <div className="flex justify-center items-center mb-4 gap-2">
//             <img src={secureLogo} alt="Secure Logo" className="w-8 h-8" />
//             <h1 className="text-white/80">Secure Login</h1>
//           </div>

//           {/* Welcome */}
//           <div className="text-center mb-6 max-w-md">
//             <h2 className="text-3xl font-semibold text-white mb-3">Welcome Back</h2>
//             <p className="text-white/80">
//               Continue your learning journey with AI-powered roadmaps
//             </p>
//           </div>

//           <img src={logo} alt="App Logo" className="w-27 h-24 mx-auto mb-4 rounded-full" />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="border p-2 w-full mb-3 rounded text-gray-900 dark:text-white
//              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//              bg-white dark:bg-gray-700"
//             onChange={handleChange}
//             required
//           />

//           {/* Password with eye toggle */}
//           <div className="relative w-full mb-2">
//             <input
//               type={showPassword ? "text" : "password"} // 👈 toggle type
//               name="password"
//               placeholder="Password"
//               className="border p-2 w-full rounded text-gray-900 dark:text-white
//                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//                bg-white dark:bg-gray-700 pr-10"
//               onChange={handleChange}
//               required
//             />
//             <span
//               className="absolute right-3 top-3 cursor-pointer text-gray-500"
//               onClick={() => setShowPassword(!showPassword)} // 👈 toggle state
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           {/* Forgot Password */}
//           <div className="text-right mb-4">
//             <button
//               type="button"
//               onClick={handleForgotPassword}
//               className="text-sm text-blue-600 hover:underline transition-colors duration-300"
//             >
//               Forgot Password?
//             </button>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 mb-3"
//           >
//             Login
//           </button>

//           {/* Divider */}
//           <div className="flex items-center my-3">
//             <hr className="flex-1 border-t border-gray-300" />
//             <span className="px-2 text-gray-500 text-sm">Or continue with</span>
//             <hr className="flex-1 border-t border-gray-300" />
//           </div>

//           {/* Social Buttons */}
//           <div className="flex gap-4 justify-center mb-4">
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="flex items-center gap-2 border p-2 rounded w-36 justify-center hover:bg-gray-100"
//             >
//               <img src={googleLogo} alt="Google" className="w-5 h-5" />
//               Google
//             </button>
//             <button className="flex items-center gap-2 border p-2 rounded w-36 justify-center hover:bg-gray-100">
//               <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
//               GitHub
//             </button>
//           </div>

//           {message && <p className="mt-2 text-sm text-red-500">{message}</p>}

//           <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
//             Don't have an account?{" "}
//             <button
//               type="button"
//               className="text-blue-600 hover:underline"
//               onClick={() => navigate("/signup")}
//             >
//               Sign Up
//             </button>
//           </p>
//         </form>
//       </div>
//     </AnimatedBackground>
//   );
// };

// export default Login;


import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthService } from "../services/GoogleAuthService"; 
import axios from "axios";
import AnimatedBackground from "../components/AnimatedBackground";
import LiquidGlass from "../components/LiquidGlass";
import logo from "../assets/logo.png";
import secureLogo from "../assets/secure.png";
import googleLogo from "../assets/google.png";
import githubLogo from "../assets/github.png";
import { FiHome } from "react-icons/fi";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Forgot password modal states
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotStep, setForgotStep] = useState(1); // 1: Email, 2: OTP, 3: Reset
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpTimer, setOtpTimer] = useState(600);
  const [resetPassword, setResetPassword] = useState({ newPassword: "", confirmPassword: "" });
  const [modalMessage, setModalMessage] = useState("");

  const otpRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
      const googleAuth = GoogleAuthService.getInstance();
      googleAuth.initializeGoogleAuth();
  }, []);

  // Countdown timer for OTP
  useEffect(() => {
    if (forgotStep !== 2) return;
    if (otpTimer <= 0) return;
    const interval = setInterval(() => setOtpTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [otpTimer, forgotStep]);

  const formatTime = () => {
    const m = Math.floor(otpTimer / 60);
    const s = otpTimer % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/home"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const googleAuth = GoogleAuthService.getInstance();
      const user = await googleAuth.signInWithGoogle();

      const res = await axios.post("http://localhost:5000/api/auth/google", user);
      localStorage.setItem("token", res.data.token);
      setMessage("Google login successful! Redirecting...");
      setTimeout(() => navigate("/home"), 1500);
    } catch (err) {
      console.error("Google login failed:", err);
      setMessage("Google login failed");
    }
  };

  const handleForgotEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email: forgotEmail });
      setModalMessage(res.data.message);
      setForgotStep(2);
      setOtpTimer(600);
      localStorage.setItem("resetEmail", forgotEmail);
    } catch (err) {
      setModalMessage(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) otpRefs.current[index + 1].focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const enteredOtp = otp.join("");
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email: forgotEmail,
        otp: enteredOtp,
      });
      localStorage.setItem("resetToken", res.data.resetToken);
      setForgotStep(3);
    } catch (err) {
      setModalMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (resetPassword.newPassword !== resetPassword.confirmPassword) {
      setModalMessage("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/auth/reset-password", {
        email: forgotEmail,
        newPassword: resetPassword.newPassword,
        resetToken: localStorage.getItem("resetToken"),
      });

      // Cleanup
      localStorage.removeItem("resetEmail");
      localStorage.removeItem("resetToken");
      setShowForgotModal(false);
      setForgotStep(1);
      setModalMessage("");
      setResetPassword({ newPassword: "", confirmPassword: "" });
      setOtp(new Array(6).fill(""));
      setMessage("Password reset successful! You can login now.");
    } catch (err) {
      setModalMessage(err.response?.data?.message || "Password reset failed");
    }
  };

  return (
<AnimatedBackground variant="auth">
  <div className="flex flex-col items-center justify-center min-h-screen px-4 relative">
    {/* Back to Home button - Top Right */}
    <div className="absolute top-4 right-4">
      <LiquidGlass className="p-1 rounded-full cursor-pointer" opacity={0.05}>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/landing");
          }}
          className="flex items-center gap-2 text-white px-4 py-2 rounded "
        >
          <FiHome className="text-xl" />
          Back to Home
        </button>
      </LiquidGlass>
    </div>

    {/* Page Content (centered stuff) */}
    <div className="mt-20">
      {/* Whatever content you want here */}
    </div>



        {/* Login Form */}
        <LiquidGlass
          className="p-8 shadow-lg rounded-2xl w-full max-w-md backdrop-blur text-center"opacity={0.1}>

          <div className="flex gap-4 justify-center mb-4">
            <LiquidGlass className="p-1 rounded-full cursor-pointer" opacity={-0.05}>
              <div className="flex items-center gap-2 w-36 justify-center">
                {/* Replace image with emoji */}
                <span className="text-xl">⛉</span>
                <h1 className="text-white/80 ">Secure Signin</h1>
              </div>
            </LiquidGlass>
          </div>

          
          <div className="text-center mb-6 max-w-md">
            <h2 className="text-3xl font-semibold text-white mb-3">Welcome Back</h2>
            <p className="text-white/80">
              Continue your learning journey with AI-powered roadmaps
            </p>
          </div>

          <img src={logo} alt="App Logo" className="w-27 h-24 mx-auto mb-4 rounded-full" />

          {/* Email */}
<LiquidGlass className="p-2 rounded-full mb-3" opacity={0.05}>
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
    onChange={handleChange}
    required
  />
</LiquidGlass>

{/* Password with eye toggle */}
<LiquidGlass className="p-2 rounded-full mb-4 relative" opacity={0.05}>
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    className="w-full bg-transparent outline-none text-gray-900 dark:text-white pr-10"
    onChange={handleChange}
    required
  />
  <span
    className="absolute right-3 top-3 cursor-pointer text-white-500"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</LiquidGlass>

          <div className="text-right mb-4">
            <button
              type="button"
              onClick={() => setShowForgotModal(true)}
              className="text-sm text-blue-600/100 hover:underline transition-colors duration-300"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-1 bg-green-600 text-white py-2 px-4 rounded-full w-full hover:bg-green-700 transition shadow-md"
          >
            Signin
          </button>

          {/* Divider */}
          <div className="flex items-center my-3">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Or continue with</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          {/* Social login buttons */}
                    <div className="flex gap-4 justify-center mb-4">
                      <LiquidGlass className="p-1 rounded-full cursor-pointer" opacity={0.05}>
                        <button
                          type="button"
                          onClick={handleGoogleLogin}
                          className="flex items-center gap-2 w-36 justify-center"
                        >
                          <img src={googleLogo} alt="Google" className="w-5 h-5" />
                          Google
                        </button>
                      </LiquidGlass>
                      <LiquidGlass className="p-1 rounded-full cursor-pointer" opacity={0.05}>
                        <button className="flex items-center gap-2 w-36 justify-center">
                          <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                          GitHub
                        </button>
                      </LiquidGlass>
                    </div>

          {message && <p className="mt-2 text-sm text-red-500">{message}</p>}

          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </LiquidGlass>

       {/* Forgot Password Modal */}
{showForgotModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <LiquidGlass className="p-6 rounded-2xl w-full max-w-md relative" opacity={0.1}>
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        onClick={() => setShowForgotModal(false)}
      >
        ✕
      </button>

      {/* Step 1: Enter Email */}
      {forgotStep === 1 && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
          <LiquidGlass className="p-2 rounded-full mb-3" opacity={0.05}>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
              required
            />
          </LiquidGlass>
          <button
            type="submit"
            onClick={handleForgotEmailSubmit}
            className="w-full mt-2 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition shadow-md"
          >
            Send OTP
          </button>
        </>
      )}

      {/* Step 2: OTP Verification */}
      {forgotStep === 2 && (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-center">Enter OTP</h2>
          <p className="text-center text-sm text-gray-500 mb-4">OTP expires in: {formatTime()}</p>
          <div className="flex justify-center gap-2 mb-3">
            {otp.map((digit, i) => (
              <LiquidGlass key={i} className="p-2 rounded-full" opacity={0.05}>
                <input
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  ref={(el) => (otpRefs.current[i] = el)}
                  className="w-12 h-12 text-center bg-transparent outline-none text-gray-900 dark:text-white"
                  required
                />
              </LiquidGlass>
            ))}
          </div>
          <button
            onClick={handleVerifyOtp}
            className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
          >
            Verify OTP
          </button>
        </>
      )}

      {/* Step 3: Reset Password */}
      {forgotStep === 3 && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-center">Reset Password</h2>

          {/* New Password */}
          <LiquidGlass className="p-2 rounded-full mb-3 relative" opacity={0.05}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={resetPassword.newPassword}
              onChange={(e) =>
                setResetPassword({ ...resetPassword, newPassword: e.target.value })
              }
              className="w-full bg-transparent outline-none text-gray-900 dark:text-white pr-10"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </LiquidGlass>

          {/* Confirm Password */}
          <LiquidGlass className="p-2 rounded-full mb-3 relative" opacity={0.05}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={resetPassword.confirmPassword}
              onChange={(e) =>
                setResetPassword({ ...resetPassword, confirmPassword: e.target.value })
              }
              className="w-full bg-transparent outline-none text-gray-900 dark:text-white pr-10"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </LiquidGlass>

          <button
            type="submit"
            onClick={handleResetPassword}
            className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
          >
            Reset Password
          </button>
        </>
      )}

      {modalMessage && (
        <p className="mt-2 text-sm text-red-500 text-center">{modalMessage}</p>
      )}
    </LiquidGlass>
  </div>
)}    





      </div>

    </AnimatedBackground>
  );
};

export default Login;
