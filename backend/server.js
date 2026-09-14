const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
const marketRoutes = require("./routes/market");
const aiRoutes = require("./routes/ai");
const newsRoutes = require("./routes/news");
const authRoutes = require("./routes/auth");
const calendarRoutes = require("./routes/calendar");

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/market", marketRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/calendar", calendarRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    app: "ODERINDE GOLD INTELLIGENCE",
    version: "3.1.0",
    status: "ONLINE",
    developer: "Oderinde Gold Intelligence Team"
  });
});

// Status Route
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    status: "Server Running",
    time: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
