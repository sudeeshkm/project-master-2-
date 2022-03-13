const mongoose = require("mongoose");

const CourseScheama = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Courses", CourseScheama);
