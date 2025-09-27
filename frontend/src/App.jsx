// import { Routes, Route, Navigate } from "react-router-dom";
// import ThemeToggle from "./components/ThemeToggle";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import logo from "./assets/header.gif";

// export default function App() {
//   return (
//     <div className="text-slate-800 dark:text-slate-100">
//       {/* Global top-left logo */}
//       <div className="fixed top-2 left-4 z-50 flex items-center gap-1">
//   <img 
//     src={logo} 
//     alt="App Logo" 
//     className="w-20 h-20" 
//   />
//   <span className="text-xl font-bold text-white">We Grow</span>
// </div>

      
//       {/* Theme toggle in top-right */}
//       <div className="fixed right-4 top-4 z-50">
//         <ThemeToggle />
//       </div>

//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </div>
//   );
// }



import { Routes, Route, Navigate } from "react-router-dom";
// import ThemeToggle from "./components/ThemeToggle";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import logo from "./assets/header.gif";
import Landing from "./pages/Landing";
// import ForgotPassword from "./pages/ForgotPassword";  
// import VerifyOTP from "./pages/VerifyOTP";
// import ResetPassword from "./pages/ResetPassword";

import GradientText from './components/GradientText'

export default function App() {
  return (
    <div className="text-slate-800 dark:text-slate-100">
      {/* Global top-left logo */}
      <div className="fixed -top-1 left-2 z-50 flex items-center gap-1">
        <img 
          src={logo} 
          alt="App Logo" 
          className="w-20 h-20" 
        />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={10}
          showBorder={false}
          className="text-4xl font-extrabold"
        >
          We Grow
        </GradientText>
      </div>


      
      {/* Theme toggle in top-right */}
      {/* <div className="fixed right-4 top-4 z-50">
        <ThemeToggle />
      </div> */}

      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" />} />


        {/* <Route path="/forgot-password" element={<ForgotPassword />} />    */}
        {/* <Route path="/verify-otp" element={<VerifyOTP />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </div>
  );
}