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
<LiquidGlass className="fixed top-0 left-0 right-0 z-50">
  <header className="flex justify-between items-center px-6 py-4">
    <ul className="flex gap-6 text-gray-900 dark:text-gray-200 font-semibold">
      <li onClick={() => navigate("/roadmaps")} className="cursor-pointer hover:text-blue-500">
        Roadmaps
      </li>
      <li onClick={() => navigate("/problems")} className="cursor-pointer hover:text-blue-500">
        Problems
      </li>
      <li onClick={() => navigate("/interview")} className="cursor-pointer hover:text-blue-500">
        Interview
      </li>
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
  </header>
</LiquidGlass>

      {/* Main Content */}
      <div className="pt-28 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Generate Roadmap Card */}
        <LiquidGlass className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            Generate New Roadmap
          </h2>

          {/* Technologies dropdown */}
          <label className="font-semibold text-gray-700 dark:text-gray-200">
            Technologies
          </label>
          <select
            className="border p-2 rounded w-full bg-white/50 dark:bg-gray-700 text-gray-900 dark:text-white"
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
          <label className="font-semibold text-gray-700 dark:text-gray-200 mt-2">
            Duration
          </label>
          <select
            className="border p-2 rounded w-full bg-white/50 dark:bg-gray-700 text-gray-900 dark:text-white"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
          </select>

          {/* Difficulty Buttons */}
          <label className="font-semibold text-gray-700 dark:text-gray-200 mt-2">
            Difficulty
          </label>
          <div className="flex gap-3">
            {["Beginner", "Intermediate", "Advanced"].map((level) => (
              <button
                key={level}
                className={`flex-1 px-3 py-2 rounded ${
                  difficulty === level
                    ? "bg-green-600 text-white"
                    : "bg-gray-200/70 dark:bg-gray-700/50 text-gray-800 dark:text-white"
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
        </LiquidGlass>

        {/* Roadmaps List */}
        <LiquidGlass className="p-6 overflow-auto max-h-[600px]">
          <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200">
            My Roadmaps
          </h3>
          {roadmap.length === 0 && (
            <p className="text-gray-500">Your generated roadmaps will appear here.</p>
          )}
          {roadmap.map((r, idx) => (
            <div key={idx} className="mb-4 p-3 border rounded bg-white/60 dark:bg-slate-700/60">
              <h4 className="font-semibold">{r.technology}</h4>
              <ul className="list-disc ml-5">
                {r.modules?.map((mod, i) => (
                  <li key={i}>
                    {mod.name} - {mod.duration} ({mod.difficulty})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </LiquidGlass>
      </div>
    </AnimatedBackground>
  );
};

export default RoadmapPage;
