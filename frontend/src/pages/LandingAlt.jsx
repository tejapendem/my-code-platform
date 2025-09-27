

// import React from "react";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";

// export default function LandingAlt() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
//       {/* Navbar */}
//       <header className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
//             Wegrow
//           </h1>
//           <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
//             <a href="#features" className="hover:text-purple-500">Features</a>
//             <a href="#how" className="hover:text-purple-500">How it Works</a>
//             <a href="#about" className="hover:text-purple-500">About</a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost">Login</Button>
//             <Button className="bg-purple-600 text-white hover:bg-purple-700">
//               Sign Up
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-gradient-to-b from-transparent to-purple-50 dark:to-gray-900">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100">
//           From <span className="text-purple-600">practice</span> to{" "}
//           <span className="text-purple-600">offer</span> — faster.
//         </h2>
//         <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
//           Master 1000+ interview-style problems, build projects that matter, and
//           prepare with realistic mock interviews. Wegrow is your shortcut to
//           landing the job.
//         </p>
//         <div className="mt-8 flex gap-4">
//           <Button className="bg-purple-600 text-white px-6 py-3 text-lg rounded-xl hover:bg-purple-700">
//             Start For Free
//           </Button>
//           <Button variant="outline" className="px-6 py-3 text-lg rounded-xl">
//             Watch Demo
//           </Button>
//         </div>
//       </section>

//       {/* Why Wegrow */}
//       <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
//         <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
//           Why Wegrow stands out
//         </h3>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { title: "Company-Tailored Sets", desc: "Solve problems tagged by FAANG & top startups." },
//             { title: "Smart Explanations", desc: "Hints, editorials, and video walk-throughs to learn efficiently." },
//             { title: "Career Tools", desc: "Mock interviews, resume reviews, and recruiter-ready profiles." },
//           ].map((feature, idx) => (
//             <Card
//               key={idx}
//               className="rounded-2xl shadow-md backdrop-blur-md bg-white/60 dark:bg-gray-800/60 border-none"
//             >
//               <CardContent className="p-6 text-center">
//                 <h4 className="text-xl font-semibold mb-3 text-purple-600">{feature.title}</h4>
//                 <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how" className="py-20 px-6 bg-purple-50 dark:bg-gray-900">
//         <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
//           Your path to success
//         </h3>
//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             { step: "1", title: "Solve", desc: "Tackle problems across DSA, system design, and SQL." },
//             { step: "2", title: "Sharpen", desc: "Analyze editorials & improve with progressive hints." },
//             { step: "3", title: "Succeed", desc: "Take mock interviews & land real offers." },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="text-center p-8 rounded-2xl shadow-md backdrop-blur-md bg-white/70 dark:bg-gray-800/70"
//             >
//               <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-purple-600 text-white text-xl font-bold">
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
//               From practice to offer — faster. Join thousands of learners growing their coding careers.
//             </p>
//           </div>
//           <div>
//             <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100">Explore</h5>
//             <ul className="mt-3 space-y-2 text-sm">
//               <li><a href="#features" className="hover:text-purple-600">Features</a></li>
//               <li><a href="#how" className="hover:text-purple-600">How It Works</a></li>
//               <li><a href="#about" className="hover:text-purple-600">About</a></li>
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
