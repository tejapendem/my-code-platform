// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AnimatedBackground from "../components/AnimatedBackground";

// const Home = () => {
//   const [token] = useState(localStorage.getItem("token"));
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);

//   return (
//     <AnimatedBackground variant="home">
//       {/* Header / Navigation */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur shadow-md">
//         <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//           <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
//             <li className="hover:text-blue-500 cursor-pointer">Roadmaps</li>
//             <li className="hover:text-blue-500 cursor-pointer">Problems</li>
//             <li className="hover:text-blue-500 cursor-pointer">Interview</li>
//           </ul>
//           <button
//             onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </nav>
//       </header>

//       {/* Content */}
//       <main className="flex flex-col justify-center items-center min-h-screen pt-32 px-4">
//         <h1 className="text-3xl font-bold mb-4 text-white text-center">
//           Welcome to My Code Platform
//         </h1>
//         <p className="text-white/80 mb-6 text-center max-w-md">
//           Explore roadmaps, solve problems, and prepare for interviews with AI-powered guidance.
//         </p>
//       </main>
//     </AnimatedBackground>
//   );
// };

// export default Home;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AnimatedBackground from "../components/AnimatedBackground";

// const RoadmapPage = () => {
//   const navigate = useNavigate();
//   const [technologies, setTechnologies] = useState("");
//   const [duration, setDuration] = useState("3 months");
//   const [difficulty, setDifficulty] = useState("Beginner");
//   const [roadmap, setRoadmap] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const techOptions = ["Python", "React", "Node.js", "SQL", "Django", "Java", "C++"];

//   // Fetch saved roadmaps on page load
//   useEffect(() => {
//     const fetchRoadmaps = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5000/api/roadmap", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRoadmap(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchRoadmaps();
//   }, []);

//   const handleGenerate = async () => {
//     if (!technologies) return alert("Please select at least one technology");

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       const res = await axios.post(
//         "http://localhost:5000/api/roadmap/generate",
//         { technologies, duration, difficulty },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       // Fix: merge properly
//       setRoadmap([res.data.roadmap, ...roadmap]);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to generate roadmap");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AnimatedBackground variant="home">
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur shadow-md">
//         <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//           <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
//             <li
//               className="hover:text-blue-500 cursor-pointer"
//               onClick={() => navigate("/roadmaps")}
//             >
//               Roadmaps
//             </li>
//             <li
//               className="hover:text-blue-500 cursor-pointer"
//               onClick={() => navigate("/problems")}
//             >
//               Problems
//             </li>
//             <li
//               className="hover:text-blue-500 cursor-pointer"
//               onClick={() => navigate("/interview")}
//             >
//               Interview
//             </li>
//           </ul>
//           <button
//             onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <div className="pt-28 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Column - Generate Roadmap */}
//         <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg flex flex-col gap-4">
//           <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
//             Generate New Roadmap
//           </h2>

//           {/* Technologies dropdown */}
//           <label className="font-semibold text-gray-700 dark:text-gray-200">
//             Technologies
//           </label>
//           <select
//             className="border p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//             value={technologies}
//             onChange={(e) => setTechnologies(e.target.value)}
//           >
//             <option value="">Select Technology</option>
//             {techOptions.map((tech) => (
//               <option key={tech} value={tech}>
//                 {tech}
//               </option>
//             ))}
//           </select>

//           {/* Duration dropdown */}
//           <label className="font-semibold text-gray-700 dark:text-gray-200 mt-2">
//             Duration
//           </label>
//           <select
//             className="border p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           >
//             <option value="1 week">1 week</option>
//             <option value="1 month">1 month</option>
//             <option value="3 months">3 months</option>
//             <option value="6 months">6 months</option>
//           </select>

//           {/* Difficulty Level */}
//           <label className="font-semibold text-gray-700 dark:text-gray-200 mt-2">
//             Difficulty
//           </label>
//           <div className="flex gap-3">
//             {["Beginner", "Intermediate", "Advanced"].map((level) => (
//               <button
//                 key={level}
//                 className={`flex-1 px-3 py-2 rounded ${
//                   difficulty === level
//                     ? "bg-green-600 text-white"
//                     : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
//                 }`}
//                 onClick={() => setDifficulty(level)}
//               >
//                 {level}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={handleGenerate}
//             disabled={loading}
//             className="mt-4 bg-green-600 text-white py-2 rounded w-full hover:bg-green-700"
//           >
//             {loading ? "Generating..." : "Generate Roadmap →"}
//           </button>
//         </div>

//         {/* Right Column - My Roadmaps */}
//         <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow-lg overflow-auto max-h-[600px]">
//           <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200">
//             My Roadmaps
//           </h3>
//           {roadmap.length === 0 && (
//             <p className="text-gray-500">Your generated roadmaps will appear here.</p>
//           )}
//           {roadmap.map((r, idx) => (
//             <div
//               key={idx}
//               className="mb-4 p-3 border rounded bg-white dark:bg-slate-700"
//             >
//               <h4 className="font-semibold">{r.technology}</h4>
//               <ul className="list-disc ml-5">
//                 {r.modules?.map((mod, i) => (
//                   <li key={i}>
//                     {mod.name} - {mod.duration} ({mod.difficulty})
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </AnimatedBackground>
//   );
// };

// export default RoadmapPage;



// src/pages/RoadmapPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimatedBackground from "../components/AnimatedBackground";
import LiquidGlass from "../components/LiquidGlass";

const RoadmapPage = () => {
  const navigate = useNavigate();
  const [technologies, setTechnologies] = useState("");
  const [duration, setDuration] = useState("3 months");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  const techOptions = ["Python", "React", "Node.js", "SQL", "Django", "Java", "C++"];

  // Fetch saved roadmaps
  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/roadmap", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRoadmap(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRoadmaps();
  }, []);

  const handleGenerate = async () => {
    if (!technologies) return alert("Please select at least one technology");

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/roadmap/generate",
        { technologies, duration, difficulty },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRoadmap([res.data.roadmap, ...roadmap]);
    } catch (err) {
      console.error(err);
      alert("Failed to generate roadmap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedBackground variant="home">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
  <LiquidGlass
    className="w-full backdrop-blur-md flex items-center justify-between px-6 py-4 shadow-lg"
    opacity={0.1}
  >
    {/* Centered Nav links */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <ul className="flex gap-10 text-gray-900 dark:text-gray-200 font-semibold">
        <li
          onClick={() => navigate("/home")}
          className="cursor-pointer hover:text-blue-500"
        >
          Roadmaps
        </li>
        <li
          onClick={() => navigate("/problems")}
          className="cursor-pointer hover:text-blue-500"
        >
          Problems
        </li>
        <li
          onClick={() => navigate("/interview")}
          className="cursor-pointer hover:text-blue-500"
        >
          Interview
        </li>
      </ul>
    </div>

    {/* Right: Logout button */}
    <LiquidGlass
      className="ml-auto px-4 py-2 rounded-full cursor-pointer"
      opacity={0.05}
    >
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="text-white/90"
      >
        Logout
      </button>
    </LiquidGlass>
  </LiquidGlass>
</header>


        {/* Logout button aligned right */}
        {/* <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout 
        </button> */}
      
      {/* Main Content */}
<div className="pt-28 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Generate Roadmap Card */}
  <LiquidGlass className="p-6 flex flex-col gap-4" opacity={-0.1}>
    <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
      Generate New Roadmap
    </h2>

    {/* Technologies dropdown */}
    <label className="font-semibold text-gray-700 dark:text-gray-200">
      Technologies
    </label>
    <LiquidGlass className="p-2 rounded">
      <select
        className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
        value={technologies}
        onChange={(e) => setTechnologies(e.target.value)}
      >
        <option value="">Select Technology</option>
        {techOptions.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>
    </LiquidGlass>

    {/* Duration dropdown */}
    <label className="font-semibold text-gray-700 dark:text-gray-200 mt-2">
      Duration
    </label>
    <LiquidGlass className="p-2 rounded">
      <select
        className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        <option value="1 week">1 week</option>
        <option value="1 month">1 month</option>
        <option value="3 months">3 months</option>
        <option value="6 months">6 months</option>
      </select>
    </LiquidGlass>

    {/* Difficulty Buttons */}
<label className="font-semibold text-gray-700 dark:text-gray-200 mt-2">
  Difficulty
</label>
<div className="flex gap-3">
  {["Beginner", "Intermediate", "Advanced"].map((level) => (
    <button
      key={level}
      className={`flex-1 px-3 py-2 rounded-full transition ${
        difficulty === level
          ? "bg-green-600 text-white shadow-md"
          : "bg-transparent border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white"
      }`}
      onClick={() => setDifficulty(level)}
    >
      {level}
    </button>
  ))}
</div>

{/* Generate Button */}
<button
  onClick={handleGenerate}
  disabled={loading}
  className="mt-4 bg-green-600 text-white py-2 px-4 rounded-full w-full hover:bg-green-700 transition shadow-md"
>
  {loading ? "Generating..." : "Generate Roadmap →"}
</button>

        </LiquidGlass>

        {/* Roadmaps List */}
<LiquidGlass className="p-6 overflow-auto max-h-[600px]">
  <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200">
    My Roadmaps
  </h3>

  {roadmap.length === 0 && (
    <p className="text-gray-500">Your generated roadmaps will appear here.</p>
  )}

  <div className="flex flex-col gap-4">
    {roadmap.map((r, idx) => (
      <div
        key={idx}
        className="p-4 rounded-2xl shadow-2xl shadow-black/30 transition hover:shadow-lg"
      >
        {/* Roadmap Header */}
        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2">
          {r.technology}
        </h4>

        {/* Modules */}
        <ul className="space-y-2">
          {r.modules?.map((mod, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-white/50 dark:bg-slate-800/50 p-2 rounded-lg"
            >
              <span className="text-gray-700 dark:text-gray-200">{mod.name}</span>

              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                  {mod.duration}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    mod.difficulty === "Beginner"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                      : mod.difficulty === "Intermediate"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300"
                      : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                  }`}
                >
                  {mod.difficulty}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</LiquidGlass>

      </div>
    </AnimatedBackground>
  );
};

export default RoadmapPage;
