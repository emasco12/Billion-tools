const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

  const signals = [

    {
      pair: "XAU/USD",
      action: "BUY",
      confidence: 89,
      recommendation: "BUY",
      comment: "Bullish trend confirmed.",
      entry: "3588.40",
      stopLoss: "3579.20",
      takeProfit: "3615.00",
      riskReward: "1 : 3"
    },

    {
      pair: "EUR/USD",
      action: "SELL",
      confidence: 92,
      recommendation: "SELL",
      comment: "Bearish momentum detected.",
      entry: "1.1742",
      stopLoss: "1.1775",
      takeProfit: "1.1660",
      riskReward: "1 : 2.5"
    },

    {
      pair: "BTC/USD",
      action: "WAIT",
      confidence: 63,
      recommendation: "WAIT",
      comment: "Market is ranging. Wait for confirmation.",
      entry: "-",
      stopLoss: "-",
      takeProfit: "-",
      riskReward: "-"
    }

  ];

  const randomSignal =
    signals[Math.floor(Math.random() * signals.length)];

  res.json(randomSignal);

});

module.exports = router;
