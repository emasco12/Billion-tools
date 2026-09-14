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
      riskReward: "1 : 3",

      trend: "Bullish",
      bos: "Bullish BOS",
      choch: "Not Detected",
      orderBlock: "Demand Zone",
      fvg: "Bullish FVG",
      liquidity: "Buy-side Liquidity"
    },

    {
      pair: "EUR/USD",
      action: "SELL",
      confidence: 91,
      recommendation: "SELL",
      comment: "Bearish structure confirmed.",
      entry: "1.1742",
      stopLoss: "1.1770",
      takeProfit: "1.1665",
      riskReward: "1 : 2.5",

      trend: "Bearish",
      bos: "Bearish BOS",
      choch: "Bearish CHoCH",
      orderBlock: "Supply Zone",
      fvg: "Bearish FVG",
      liquidity: "Sell-side Liquidity"
    }

  ];

  const signal =
    signals[Math.floor(Math.random() * signals.length)];

  res.json(signal);

});

module.exports = router;
