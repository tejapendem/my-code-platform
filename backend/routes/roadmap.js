// import express from "express";
// import Roadmap from "../models/Roadmap.js";

// const router = express.Router();

// // Generate roadmap
// router.post("/generate", async (req, res) => {
//   try {
//     const { technologies, duration, difficulty } = req.body;

//     if (!technologies) {
//       return res.status(400).json({ error: "Technologies are required" });
//     }

//     // Handle multiple techs
//     const techList = Array.isArray(technologies)
//       ? technologies
//       : technologies.split(",").map((t) => t.trim());

//     const roadmap = [];

//     for (const tech of techList) {
//       const modules = [
//         { name: "Basics", duration: "1 week", difficulty },
//         { name: "Intermediate Concepts", duration: "2 weeks", difficulty },
//         { name: "Projects", duration: "3 weeks", difficulty },
//       ];

//       const roadmapEntry = new Roadmap({
//         technology: tech,
//         duration,
//         difficulty,
//         modules,
//       });

//       await roadmapEntry.save();
//       roadmap.push(roadmapEntry);
//     }

//     return res.json({ roadmap });
//   } catch (err) {
//     console.error("Error generating roadmap:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Fetch all saved roadmaps
// router.get("/", async (req, res) => {
//   try {
//     const roadmaps = await Roadmap.find().sort({ createdAt: -1 });
//     res.json(roadmaps);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch roadmaps" });
//   }
// });

// export default router;

import express from "express";
import Roadmap from "../models/Roadmap.js"; // ✅ works now
import authMiddleware from "../middleware/authMiddleware.js"; // ✅ import auth middleware

const router = express.Router();

// Generate roadmap
router.post("/generate", authMiddleware, async (req, res) => {
  try {
    const { technologies, duration, difficulty } = req.body;

    if (!technologies) {
      return res.status(400).json({ error: "Technologies are required" });
    }

    const techList = Array.isArray(technologies)
      ? technologies
      : technologies.split(",").map((t) => t.trim());

    const roadmap = [];

    for (const tech of techList) {
      const modules = [
        { name: "Basics", duration: "1 week", difficulty },
        { name: "Intermediate Concepts", duration: "2 weeks", difficulty },
        { name: "Projects", duration: "3 weeks", difficulty },
      ];

      const roadmapEntry = new Roadmap({
        user: req.user.id,   // ✅ link roadmap to logged-in user
        technology: tech,
        duration,
        difficulty,
        modules,
      });

      await roadmapEntry.save();
      roadmap.push(roadmapEntry);
    }

    return res.json({ roadmap });
  } catch (err) {
    console.error("Error generating roadmap:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch roadmaps for logged-in user only
router.get("/", authMiddleware, async (req, res) => {
  try {
    const roadmaps = await Roadmap.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(roadmaps);
  } catch (err) {
    console.error("Error fetching roadmaps:", err);
    res.status(500).json({ error: "Failed to fetch roadmaps" });
  }
});

export default router;
