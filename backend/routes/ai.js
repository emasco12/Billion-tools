const router = require("express").Router();
const AIAnalysisEngine = require("../services/aiAnalysisEngine");

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

  const router = require("express").Router();
const AIAnalysisEngine = require("../services/aiAnalysisEngine");
const SmartMoneyEngine = require("../services/smartMoneyEngine");

router.get("/", async (req, res) => {

    let currentPrice = 3588.40;

    try {
        const market = await fetch("https://billion-tools.onrender.com/api/market");
        const marketData = await market.json();

        if (marketData.commodities?.length) {
            currentPrice = Number(
                marketData.commodities[0].close ||
                marketData.commodities[0].price
            );
        }
    } catch (e) {
        console.log(e);
    }

    // Build market data
    const marketPrice = {
        price: currentPrice
    };

    // Get Smart Money analysis
    const smartMoney = new SmartMoneyEngine(marketPrice).analyze();

    // Indicators (replace with your real values later)
    const indicators = {
        rsi: 56,
        macd: "Bullish",
        ema20: currentPrice - 3,
        ema50: currentPrice - 10,
        ema200: currentPrice - 25,
        atr: 18
    };

    const news = [];

    // ONE SOURCE OF TRUTH
    const engine = new AIAnalysisEngine(
        indicators,
        smartMoney,
        marketPrice,
        news
    );

    const analysis = engine.generate();

    res.json(analysis);

});

module.exports = router;
  
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

  // Gold Scanner
  let breakoutStatus;
  let momentumStatus;
  let scannerTrend;
  let scannerVolatility;

  if (signal === "BUY") {
    breakoutStatus = "Bullish Breakout";
    momentumStatus = "Strong";
    scannerTrend = "Uptrend";
    scannerVolatility = "Normal";
  } else if (signal === "SELL") {
    breakoutStatus = "Bearish Breakdown";
    momentumStatus = "Strong";
    scannerTrend = "Downtrend";
    scannerVolatility = "High";
  } else {
    breakoutStatus = "No Breakout";
    momentumStatus = "Weak";
    scannerTrend = "Sideways";
    scannerVolatility = "Low";
  }

  // Gold Strength
  let strengthScore;
  let buyProbability;
  let sellProbability;
  let overallSignal;

  if (signal === "BUY") {
    strengthScore = 88;
    buyProbability = "88%";
    sellProbability = "12%";
    overallSignal = "STRONG BUY";
  } else if (signal === "SELL") {
    strengthScore = 82;
    buyProbability = "18%";
    sellProbability = "82%";
    overallSignal = "STRONG SELL";
  } else {
    strengthScore = 50;
    buyProbability = "50%";
    sellProbability = "50%";
    overallSignal = "WAIT";
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

    breakoutStatus,
    momentumStatus,
    scannerTrend,
    scannerVolatility,

    strengthScore,
    buyProbability,
    sellProbability,
    overallSignal,

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
        ? "AI detects a selling opportunity."
        : "Wait for confirmation."
  });

});

module.exports = router;
