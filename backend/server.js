const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Home
app.get("/", (req, res) => {
  res.json({
    app: "ODERINDE GOLD INTELLIGENCE",
    version: "3.0.0",
    status: "ONLINE"
  });
});

// Status API
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    ai: "READY",
    smc: "READY",
    market: "READY"
  });
});

// Market API
app.get("/api/market", (req, res) => {
  res.json({
    forex: [
      { symbol: "EUR/USD", price: 1.1732, change: "+0.21%" },
      { symbol: "GBP/USD", price: 1.3625, change: "-0.08%" },
      { symbol: "USD/JPY", price: 147.83, change: "+0.14%" }
    ],
    crypto: [
      { symbol: "BTC/USD", price: 118250.45, change: "+1.42%" },
      { symbol: "ETH/USD", price: 4821.60, change: "+0.86%" }
    ],
    commodities: [
      { symbol: "GOLD", price: 3528.40, change: "+0.15%" },
      { symbol: "SILVER", price: 42.63, change: "-0.12%" }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
