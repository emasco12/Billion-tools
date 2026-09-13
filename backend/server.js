const marketRoutes = require("./routes/market");
const aiRoutes = require("./routes/ai");
const newsRoutes = require("./routes/news");const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const random = (min, max) => +(Math.random() * (max - min) + min).toFixed(4);

app.get("/", (req, res) => {
  res.json({
    app: "ODERINDE GOLD INTELLIGENCE",
    version: "3.1.0",
    status: "ONLINE"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    backend: "ONLINE",
    ai: "READY",
    market: "LIVE",
    websocket: "COMING SOON",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/market", (req, res) => {
  res.json({
    forex: [
      { symbol: "EUR/USD", price: random(1.1700, 1.1800), change: random(-1, 1) },
      { symbol: "GBP/USD", price: random(1.3500, 1.3700), change: random(-1, 1) },
      { symbol: "USD/JPY", price: random(147, 149), change: random(-1, 1) }
    ],
    crypto: [
      { symbol: "BTC/USD", price: random(118000, 119000), change: random(-3, 3) },
      { symbol: "ETH/USD", price: random(4700, 4900), change: random(-3, 3) }
    ],
    commodities: [
      { symbol: "GOLD", price: random(3500, 3550), change: random(-1, 1) },
      { symbol: "SILVER", price: random(42, 44), change: random(-1, 1) }
    ],
    indices: [
      { symbol: "US30", price: Math.round(random(46000, 46500)) }
    ]
  });
});

app.get("/api/ai", (req, res) => {
  const signals = ["BUY", "SELL", "WAIT"];

  res.json({
    recommendation: signals[Math.floor(Math.random() * signals.length)],
    confidence: Math.round(random(70, 98)) + "%",
    comment:
      "Trend remains intact. Wait for confirmation before entering a position."
  });
});

app.get("/api/news", (req, res) => {
  res.json([
    {
      title: "USD strengthens ahead of major economic releases"
    },
    {
      title: "Gold remains supported by global uncertainty"
    },
    {
      title: "Bitcoin trades near recent highs"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 ODERINDE GOLD INTELLIGENCE running on port ${PORT}`);
});
