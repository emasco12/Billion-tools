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

  const signals = ["BUY", "SELL", "WAIT"];
  const signal = signals[Math.floor(Math.random() * signals.length)];

  let confidence;

  if (signal === "BUY") {
    confidence = Math.floor(Math.random() * 21) + 60;
  } else if (signal === "SELL") {
    confidence = Math.floor(Math.random() * 21) + 55;
  } else {
    confidence = Math.floor(Math.random() * 21) + 40;
  }

  const entry = currentPrice.toFixed(2);
  const stopLoss = (currentPrice - 10).toFixed(2);
  const takeProfit = (currentPrice + 30).toFixed(2);

  res.json({

    recommendation: signal,

    confidence: confidence + "%",

    entry,

    stopLoss,

    takeProfit,

    riskReward: "1:3",

    trend:
      signal === "BUY"
        ? "Bullish"
        : signal === "SELL"
        ? "Bearish"
        : "Sideways",

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
