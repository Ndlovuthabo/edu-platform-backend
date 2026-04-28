const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

router.post("/subscribe", protect, paymentController.subscribe);
router.get("/status/:userId", protect, paymentController.checkStatus);

module.exports = router;