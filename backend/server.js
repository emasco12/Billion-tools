const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Application information
const APP = {
  name: "ODERINDE GOLD INTELLIGENCE",
  version: "3.0.0",
  status: "ONLINE"
};

// Home
app.get("/", (req, res) => {
  res.json({
    ...APP,
    message: "Professional AI Trading Platform"
  });
});

// Health
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Dashboard Status
app.get("/api/status", (req, res) => {
  res.json({
    backend: "ONLINE",
    ai: "READY",
    smc: "READY",
    strategyEngine: "READY",
    websocket: "COMING SOON",
    broker: "COMING SOON"
  });
});

// Market Data
app.get("/api/market", (req, res) => {

  res.json({

    forex: [
      { symbol: "EUR/USD", price: 1.1732, change: 0.21 },
      { symbol: "GBP/USD", price: 1.3625, change: -0.08 },
      { symbol: "USD/JPY", price: 147.83, change: 0.14 },
      { symbol: "AUD/USD", price: 0.6844, change: 0.09 }
    ],

    crypto: [
      { symbol: "BTC/USD", price: 118250.45, change: 1.42 },
      { symbol: "ETH/USD", price: 4821.60, change: 0.86 },
      { symbol: "SOL/USD", price: 232.11, change: 2.35 }
    ],

    commodities: [
      { symbol: "GOLD", price: 3528.40, change: 0.15 },
      { symbol: "SILVER", price: 42.63, change: -0.12 },
      { symbol: "WTI OIL", price: 78.92, change: 0.61 }
    ],

    indices: [
      { symbol: "US30", price: 46230 },
      { symbol: "NASDAQ", price: 24180 },
      { symbol: "S&P500", price: 7245 }
    ]

  });

});

// AI
app.get("/api/ai", (req, res) => {

  res.json({

    trend: "Bullish",

    confidence: "91%",

    recommendation: "BUY",

    comment:
      "Higher timeframe remains bullish. Wait for liquidity sweep before entry."

  });

});

// Signals
app.get("/api/signals", (req, res) => {

  res.json({

    pair: "EUR/USD",

    timeframe: "H1",

    signal: "BUY",

    entry: 1.1730,

    stopLoss: 1.1705,

    takeProfit: 1.1795,

    riskReward: "1 : 3"

  });

});

app.listen(PORT, () => {

  console.log("");

  console.log("====================================");

  console.log(APP.name);

  console.log("Version:", APP.version);

  console.log("Server Running");

  console.log("Port:", PORT);

  console.log("====================================");

});
