const Class = require("../models/Class");

// CREATE CLASS (teacher/admin)
exports.createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.json(newClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL CLASSES
exports.getClasses = async (req, res) => {
  const classes = await Class.find();
  res.json(classes);
};

// START LIVE CLASS
exports.startLive = async (req, res) => {
  const classItem = await Class.findById(req.params.id);
  classItem.isLive = true;
  await classItem.save();

  res.json({ message: "Live started", classItem });
};