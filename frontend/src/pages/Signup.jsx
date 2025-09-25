// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AnimatedBackground from "../components/AnimatedBackground";
// import logo from "../assets/logo.png"; // 👈 same gif

// const Signup = () => {
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/auth/signup", form);
//       setMessage("Signup successful! Redirecting...");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       setMessage(err.response?.data?.error || "Signup failed");
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
//           <img src={logo} alt="App Logo" className="w-45 h-30 mx-auto mb-4 rounded-full" />

//           <h2 className="text-2xl font-bold mb-4">Signup</h2>

//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             className="border p-2 w-full mb-3 rounded"
//             onChange={handleChange}
//             required
//           />
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
//             className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
//           >
//             Signup
//           </button>

//         {/* Login button */}
//           <button
//             type="button"
//             onClick={() => navigate("/login")}
//             className="mt-3 bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
//           >
//             Login
//           </button>

//           {message && <p className="mt-3">{message}</p>}
//         </form>
//       </div>
//     </AnimatedBackground>
//   );
// };

// export default Signup;


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import logo from "../assets/logo.png"; // main logo
import secureLogo from "../assets/secure.png"; // top small logo
import googleLogo from "../assets/google.png"; // Google logo
import githubLogo from "../assets/github.png"; // GitHub logo

const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      setMessage("Signup successful! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <AnimatedBackground variant="auth">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">

        {/* Signup form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-slate-900/70 p-8 shadow-lg rounded-2xl w-full max-w-md backdrop-blur text-center"
        >

          {/* Top secure login header with logo */}
        <div className="flex justify-center items-center mb-4 gap-2">
                  <img src={secureLogo} alt="Secure Logo" className="w-8 h-8" />
                  <h1 className="text-white/80">Secure Login</h1>
                </div>

          {/* Main welcome message */}
        <div className="text-center mb-6 max-w-md">
          <h2 className="text-2xl font-semibold text-white mb-2">Create Account</h2>
          <p className="text-white/80">Start your AI-powered learning journey today</p>
          <img src={logo} alt="App Logo" className="w-27 h-24 mx-auto mb-4 rounded-full" />
        </div>

          {/* Signup form */}
        {/* <form
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-slate-900/70 p-8 shadow-lg rounded-2xl w-full max-w-md backdrop-blur text-center"
        > */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 w-full mb-2 rounded text-gray-900 dark:text-white
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             bg-white dark:bg-gray-700"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full mb-2 rounded text-gray-900 dark:text-white
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             bg-white dark:bg-gray-700"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 w-full mb-2 rounded text-gray-900 dark:text-white
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             bg-white dark:bg-gray-700"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 mb-3"
          >
            Signup
          </button>

          {/* Or continue with */}
          <div className="flex items-center my-3">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Or continue with</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          {/* Social login buttons */}
          <div className="flex gap-4 justify-center mb-4">
            <button className="flex items-center gap-2 border p-2 rounded w-36 justify-center hover:bg-gray-100">
              <img src={googleLogo} alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="flex items-center gap-2 border p-2 rounded w-36 justify-center hover:bg-gray-100">
              <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
              GitHub
            </button>
          </div>

          {message && <p className="mt-2 text-sm text-red-500">{message}</p>}

          {/* Already have account */}
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </AnimatedBackground>
  );
};

export default Signup;
