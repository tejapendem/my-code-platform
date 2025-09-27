// // src/pages/Landing.jsx
// import React from "react";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";

// export default function Landing() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
//       {/* Navbar */}
//       <header className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
//             Wegrow
//           </h1>
//           <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
//             <a href="#features" className="hover:text-indigo-500">Features</a>
//             <a href="#how" className="hover:text-indigo-500">How it Works</a>
//             <a href="#about" className="hover:text-indigo-500">About</a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost">Login</Button>
//             <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
//               Sign Up
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-gradient-to-b from-transparent to-indigo-50 dark:to-gray-900">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100">
//           Grow your code, <span className="text-indigo-600">grow your career.</span>
//         </h2>
//         <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
//           Practice real interview problems, build projects, and get job-ready.  
//           Wegrow helps you code smarter and land stronger.
//         </p>
//         <div className="mt-8 flex gap-4">
//           <Button className="bg-indigo-600 text-white px-6 py-3 text-lg rounded-xl hover:bg-indigo-700">
//             Get Started — It’s Free
//           </Button>
//           <Button variant="outline" className="px-6 py-3 text-lg rounded-xl">
//             Browse Problems
//           </Button>
//         </div>
//       </section>

//       {/* Why Wegrow */}
//       <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
//         <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
//           Why choose Wegrow?
//         </h3>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { title: "Interview-Ready Problems", desc: "Curated, company-tagged challenges that mimic real interviews." },
//             { title: "Guided Solutions", desc: "Step-by-step editorials and clean explanations that accelerate learning." },
//             { title: "Projects & Mock Interviews", desc: "Hands-on coding projects and realistic mock interview sessions." },
//           ].map((feature, idx) => (
//             <Card
//               key={idx}
//               className="rounded-2xl shadow-md backdrop-blur-md bg-white/60 dark:bg-gray-800/60 border-none"
//             >
//               <CardContent className="p-6 text-center">
//                 <h4 className="text-xl font-semibold mb-3 text-indigo-600">{feature.title}</h4>
//                 <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how" className="py-20 px-6 bg-indigo-50 dark:bg-gray-900">
//         <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
//           How it works
//         </h3>
//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             { step: "1", title: "Practice", desc: "Solve problems with instant feedback from our smart judge." },
//             { step: "2", title: "Build", desc: "Create mini-projects that strengthen your portfolio." },
//             { step: "3", title: "Interview", desc: "Prepare with timed mocks and land your dream role." },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="text-center p-8 rounded-2xl shadow-md backdrop-blur-md bg-white/70 dark:bg-gray-800/70"
//             >
//               <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-indigo-600 text-white text-xl font-bold">
//                 {item.step}
//               </div>
//               <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
//                 {item.title}
//               </h4>
//               <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer id="about" className="py-12 px-6 bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-gray-600 dark:text-gray-300">
//           <div>
//             <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100">Wegrow</h5>
//             <p className="mt-3 text-sm">
//               Learn, practice, and grow your coding skills with real-world interview prep.
//             </p>
//           </div>
//           <div>
//             <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100">Links</h5>
//             <ul className="mt-3 space-y-2 text-sm">
//               <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
//               <li><a href="#how" className="hover:text-indigo-600">How It Works</a></li>
//               <li><a href="#about" className="hover:text-indigo-600">About</a></li>
//             </ul>
//           </div>
//           <div>
//             <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100">Stay Connected</h5>
//             <p className="mt-3 text-sm">© {new Date().getFullYear()} Wegrow. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import LiquidGlass from "../components/LiquidGlass";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <AnimatedBackground variant="landing">
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="fixed top-0 w-full z-50">
          <LiquidGlass className="w-full backdrop-blur-md flex items-center justify-between px-6 py-4 shadow-lg">
            <h1 className="text-2xl font-bold text-indigo-400"></h1>
            <nav className="hidden md:flex space-x-6 text-white/80 font-medium">
              <a href="#features" className="hover:text-indigo-300">
                Features
              </a>
              <a href="#how" className="hover:text-indigo-300">
                How it Works
              </a>
              <a href="#about" className="hover:text-indigo-300">
                About
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <LiquidGlass
                className="px-4 py-2 rounded-full cursor-pointer"
                opacity={0.05}
              >
                <button onClick={() => navigate("/login")} className="text-white/90">
                  Login
                </button>
              </LiquidGlass>
              <LiquidGlass
                className="px-4 py-2 rounded-full cursor-pointer"
                opacity={0.1}
              >
                <button onClick={() => navigate("/signup")} className="text-white font-semibold">
                  Sign Up
                </button>
              </LiquidGlass>
            </div>
          </LiquidGlass>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
          <LiquidGlass className="p-10 rounded-2xl max-w-4xl" opacity={0.05}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white">
              Grow your code,{" "}
              <span className="text-indigo-300">grow your career.</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
              Practice real interview problems, build projects, and get job-ready.
              Wegrow helps you code smarter and land stronger.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <LiquidGlass className="px-6 py-3 rounded-full cursor-pointer" opacity={0.1}>
                <button
                  onClick={() => navigate("/signup")}
                  className="text-white font-medium"
                >
                  Get Started — It’s Free
                </button>
              </LiquidGlass>
              <LiquidGlass className="px-6 py-3 rounded-full cursor-pointer" opacity={0.05}>
                <button
                  onClick={() => navigate("/login")}
                  className="text-white/80 font-medium"
                >
                  Browse Problems
                </button>
              </LiquidGlass>
            </div>
          </LiquidGlass>
        </section>

        {/* Why Wegrow */}
        <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Why choose Wegrow?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Interview-Ready Problems",
                desc: "Curated, company-tagged challenges that mimic real interviews.",
              },
              {
                title: "Guided Solutions",
                desc: "Step-by-step editorials and clean explanations that accelerate learning.",
              },
              {
                title: "Projects & Mock Interviews",
                desc: "Hands-on coding projects and realistic mock interview sessions.",
              },
            ].map((feature, idx) => (
              <LiquidGlass key={idx} className="p-6 rounded-2xl text-center" opacity={0.05}>
                <h4 className="text-xl font-semibold text-indigo-300 mb-3">
                  {feature.title}
                </h4>
                <p className="text-white/80">{feature.desc}</p>
              </LiquidGlass>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="py-20 px-6 bg-transparent">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            How it works
          </h3>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Practice",
                desc: "Solve problems with instant feedback from our smart judge.",
              },
              {
                step: "2",
                title: "Build",
                desc: "Create mini-projects that strengthen your portfolio.",
              },
              {
                step: "3",
                title: "Interview",
                desc: "Prepare with timed mocks and land your dream role.",
              },
            ].map((item, idx) => (
              <LiquidGlass key={idx} className="p-8 rounded-2xl text-center" opacity={0.05}>
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-indigo-600 text-white text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-white/80">{item.desc}</p>
              </LiquidGlass>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          id="about"
          className="py-12 px-6 border-t border-white/20"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-white/80">
            <div>
              <h5 className="text-lg font-bold text-white">Wegrow</h5>
              <p className="mt-3 text-sm">
                Learn, practice, and grow your coding skills with real-world interview prep.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold text-white">Links</h5>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-indigo-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how" className="hover:text-indigo-300">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-indigo-300">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold text-white">Stay Connected</h5>
              <p className="mt-3 text-sm">
                © {new Date().getFullYear()} Wegrow. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AnimatedBackground>
  );
};

export default Landing;
