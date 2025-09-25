

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";

const RoadmapPage = () => {
  const navigate = useNavigate();
  const [technologies, setTechnologies] = useState("");
  const [duration, setDuration] = useState("3 months");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const techOptions = ["Python", "React", "Node.js", "SQL", "Django", "Java", "C++"];

  // Fetch saved roadmaps on page load
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
      setRoadmap(res.data.roadmap.concat(roadmap)); // add new to existing
      setShowPopup(false);
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur shadow-md">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Roadmaps</li>
            <li className="hover:text-blue-500 cursor-pointer">Problems</li>
            <li className="hover:text-blue-500 cursor-pointer">Interview</li>
          </ul>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </nav>
      </header>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 px-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 w-full max-w-5xl shadow-lg flex gap-6">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Technologies dropdown */}
              <label className="font-semibold text-gray-700 dark:text-gray-200">Technologies</label>
              <select
                className="border p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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

              {/* Duration dropdown */}
              <label className="font-semibold text-gray-700 dark:text-gray-200 mt-2">Duration</label>
              <select
                className="border p-2 rounded w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="1 week">1 week</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
              </select>

              {/* Difficulty Level */}
              <label className="font-semibold text-gray-700 dark:text-gray-200 mt-2">Difficulty</label>
              <div className="flex gap-3">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <button
                    key={level}
                    className={`flex-1 px-3 py-2 rounded ${
                      difficulty === level
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                    }`}
                    onClick={() => setDifficulty(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="mt-4 bg-green-600 text-white py-2 rounded w-full hover:bg-green-700"
              >
                {loading ? "Generating..." : "Generate Roadmap →"}
              </button>
            </div>

            {/* Right column */}
            <div className="flex-1 bg-gray-100 dark:bg-slate-800 p-4 rounded overflow-auto max-h-[400px]">
              <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">My Roadmaps</h3>
              {roadmap.length === 0 && <p className="text-gray-500">Your generated roadmap will appear here.</p>}
              {roadmap.map((tech, idx) => (
                <div key={idx} className="mb-4 p-2 border rounded bg-white dark:bg-slate-700">
                  <h4 className="font-semibold">{tech.technology}</h4>
                  <ul className="list-disc ml-5">
                    {tech.modules.map((mod, i) => (
                      <li key={i}>
                        {mod.name} - {mod.duration} ({mod.difficulty})
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AnimatedBackground>
  );
};

export default RoadmapPage;
