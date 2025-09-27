
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthService } from "../services/GoogleAuthService"; 
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 add icons
import googleLogo from "../assets/google.png";
import githubLogo from "../assets/github.png";
import logo from "../assets/logo.png";
import secureLogo from "../assets/secure.png";
import AnimatedBackground from "../components/AnimatedBackground";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 state for toggle
  const navigate = useNavigate();

  useEffect(() => {
    const googleAuth = GoogleAuthService.getInstance();
    googleAuth.initializeGoogleAuth();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  return (
    <AnimatedBackground variant="auth">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-slate-900/70 p-8 shadow-lg rounded-2xl w-full max-w-md backdrop-blur text-center"
        >
          {/* Secure Header */}
          <div className="flex justify-center items-center mb-4 gap-2">
            <img src={secureLogo} alt="Secure Logo" className="w-8 h-8" />
            <h1 className="text-white/80">Secure Login</h1>
          </div>

          {/* Welcome */}
          <div className="text-center mb-6 max-w-md">
            <h2 className="text-3xl font-semibold text-white mb-3">Welcome Back</h2>
            <p className="text-white/80">
              Continue your learning journey with AI-powered roadmaps
            </p>
          </div>

          <img src={logo} alt="App Logo" className="w-27 h-24 mx-auto mb-4 rounded-full" />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded text-gray-900 dark:text-white
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             bg-white dark:bg-gray-700"
            onChange={handleChange}
            required
          />

          {/* Password with eye toggle */}
          <div className="relative w-full mb-2">
            <input
              type={showPassword ? "text" : "password"} // 👈 toggle type
              name="password"
              placeholder="Password"
              className="border p-2 w-full rounded text-gray-900 dark:text-white
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               bg-white dark:bg-gray-700 pr-10"
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)} // 👈 toggle state
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 hover:underline transition-colors duration-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 mb-3"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-3">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Or continue with</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 justify-center mb-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 border p-2 rounded w-36 justify-center hover:bg-gray-100"
            >
              <img src={googleLogo} alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="flex items-center gap-2 border p-2 rounded w-36 justify-center hover:bg-gray-100">
              <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
              GitHub
            </button>
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
        </form>
      </div>
    </AnimatedBackground>
  );
};

export default Login;

