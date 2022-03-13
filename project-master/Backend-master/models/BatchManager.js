const mongoose = require("mongoose");

const BatchManagerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    course: {
      type: String,
      required: true,
      unique: true,
    },
    designation: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BatchManagers", BatchManagerSchema);
