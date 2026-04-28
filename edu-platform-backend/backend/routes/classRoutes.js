const express = require("express");
const router = express.Router();

const classController = require("../controllers/classController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

router.post(
  "/create",
  protect,
  authorizeRoles("teacher", "admin"),
  classController.createClass
);

router.get("/", protect, classController.getClasses);

router.put(
  "/start/:id",
  protect,
  authorizeRoles("teacher", "admin"),
  classController.startLive
);

module.exports = router;