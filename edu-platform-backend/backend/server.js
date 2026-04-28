const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const classRoutes = require("./routes/classRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const liveRoutes = require("./routes/liveRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/live", liveRoutes);
app.use("/api/ai", aiRoutes);

// Socket.IO
const io = new Server(server, {
  cors: { origin: "*" }
});

require("./sockets/chatSocket")(io);

server.listen(5000, () => console.log("Server running"));