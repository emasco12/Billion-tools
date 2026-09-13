const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "ODERINDE GOLD INTELLIGENCE",
    version: "3.0.0",
    status: "Running",
    message: "Welcome to the Professional AI Trading Platform",
    features: [
      "Smart Money Concepts",
      "ICT",
      "AI Trading Assistant",
      "Market Scanner",
      "Risk Management",
      "Trade Journal",
      "Analytics"
    ]
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
