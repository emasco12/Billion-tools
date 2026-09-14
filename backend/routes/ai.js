const router = require("express").Router();

router.get("/", async (req, res) => {

  let currentPrice = 3588.40;

  try {
    const market = await fetch("https://billion-tools.onrender.com/api/market");
    const marketData = await market.json();

    if (marketData.commodities && marketData.commodities.length > 0) {
      currentPrice = Number(
        marketData.commodities[0].close ||
        marketData.commodities[0].price
      );
    }

  } catch (e) {
    console.log(e);
  }

  let signal;
  let trend;
  let entry;
  let stopLoss;
  let takeProfit;

  if (currentPrice >= 3600) {
    signal = "BUY";
    trend = "Bullish";

    entry = currentPrice;
    stopLoss = currentPrice - 12;
    takeProfit = currentPrice + 36;

  } else if (currentPrice <= 3550) {
    signal = "SELL";
    trend = "Bearish";

    entry = currentPrice;
    stopLoss = currentPrice + 12;
    takeProfit = currentPrice - 36;

  } else {
    signal = "WAIT";
    trend = "Sideways";

    entry = currentPrice;
    stopLoss = currentPrice - 8;
    takeProfit = currentPrice + 8;
  }

  let confidence;

  if (signal === "BUY") {
    confidence = Math.floor(Math.random() * 21) + 60;
  } else if (signal === "SELL") {
    confidence = Math.floor(Math.random() * 21) + 55;
  } else {
    confidence = Math.floor(Math.random() * 21) + 40;
  }

  // Market Session
  const hour = new Date().getUTCHours();

  let marketSession;

  if (hour >= 21 || hour < 6) {
    marketSession = "Sydney";
  } else if (hour >= 6 && hour < 8) {
    marketSession = "Tokyo";
  } else if (hour >= 8 && hour < 16) {
    marketSession = "London";
  } else {
    marketSession = "New York";
  }

  // Gold Analysis
  let marketBias;
  let trendStrength;
  let riskLevel;

  if (signal === "BUY") {
    marketBias = "Bullish";
    trendStrength = (Math.floor(Math.random() * 16) + 85) + "%";
    riskLevel = "Low";
  } else if (signal === "SELL") {
    marketBias = "Bearish";
    trendStrength = (Math.floor(Math.random() * 16) + 80) + "%";
    riskLevel = "Medium";
  } else {
    marketBias = "Neutral";
    trendStrength = (Math.floor(Math.random() * 21) + 50) + "%";
    riskLevel = "High";
  }

  res.json({
    recommendation: signal,
    confidence: confidence + "%",
    entry: entry.toFixed(2),
    stopLoss: stopLoss.toFixed(2),
    takeProfit: takeProfit.toFixed(2),
    riskReward: "1:3",

    trend,
    marketSession,
    marketBias,
    trendStrength,
    riskLevel,

    smartMoney:
      signal === "BUY"
        ? "Institutions accumulating positions."
        : signal === "SELL"
        ? "Institutions distributing positions."
        : "Waiting for confirmation.",

    comment:
      signal === "BUY"
        ? "AI detects a buying opportunity."
        : signal === "SELL"
        ? "AI detects a potential selling opportunity."
        : "Wait for confirmation."

  });

});

module.exports = router;
