const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  title: String,
  subject: String,
  grade: String,
  teacherId: String,
  startTime: Date,
  duration: Number, // in minutes
  isLive: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Class", classSchema);