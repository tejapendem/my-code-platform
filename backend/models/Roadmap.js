// import mongoose from "mongoose";

// const ModuleSchema = new mongoose.Schema({
//   name: String,
//   duration: String,
//   difficulty: String,
// });

// const RoadmapSchema = new mongoose.Schema(
//   {
//     technology: String,
//     duration: String,
//     difficulty: String,
//     modules: [ModuleSchema],
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Roadmap", RoadmapSchema);



import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema(
  {
    technology: String,
    duration: String,
    difficulty: String,
    modules: [
      {
        name: String,
        duration: String,
        difficulty: String,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Roadmap = mongoose.models.Roadmap || mongoose.model("Roadmap", roadmapSchema);

export default Roadmap;
