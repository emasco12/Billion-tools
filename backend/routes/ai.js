const router = require("express").Router();

router.get("/", (req, res) => {
  const signals = ["BUY", "SELL", "WAIT"];
  const signal = signals[Math.floor(Math.random() * signals.length)];

  res.json({
    recommendation: signal,
    confidence: Math.floor(Math.random() * 15) + 85 + "%",
    entry: "3588.40",
    stopLoss: "3578.40",
    takeProfit: "3618.40",
    riskReward: "1:3",
    trend: signal === "BUY"
      ? "Bullish"
      : signal === "SELL"
      ? "Bearish"
      : "Sideways",
    smartMoney:
      signal === "BUY"
        ? "Institutions accumulating positions."
        : signal === "SELL"
        ? "Institutions distributing positions."
        : "Waiting for market confirmation.",
    comment:
      signal === "BUY"
        ? "AI detects a high-probability buying opportunity."
        : signal === "SELL"
        ? "AI detects a potential selling opportunity."
        : "No high-quality setup. Wait for confirmation."
  });
});

module.exports = router;
