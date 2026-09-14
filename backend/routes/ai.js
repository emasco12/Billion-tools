const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

  const signals = ["BUY", "SELL", "HOLD"];

  const signal =
    signals[Math.floor(Math.random() * signals.length)];

  let comment = "";
  let confidence = 0;

  if (signal === "BUY") {
    comment = "Bullish momentum detected.";
    confidence = 86;
  } else if (signal === "SELL") {
    comment = "Bearish pressure increasing.";
    confidence = 82;
  } else {
    comment = "Market is ranging. Wait for confirmation.";
    confidence = 74;
  }

  res.json({
    recommendation: signal,
    confidence,
    comment,
    entry: "3528.40",
    stopLoss: "3518.40",
    takeProfit: "3558.40",
    riskReward: "1 : 3"
  });

});

module.exports = router;
