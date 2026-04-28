const express = require("express");
const router = express.Router();
const liveController = require("../controllers/liveController");

router.get("/token/:channel", liveController.generateToken);

module.exports = router;