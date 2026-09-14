const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

  res.json({
    pair: "XAU/USD",
    action: "BUY",
    confidence: 87,
    recommendation: "BUY",
    comment: "Bullish momentum detected.",
    entry: "3588.40",
    stopLoss: "3579.20",
    takeProfit: "3615.00",
    riskReward: "1 : 3"
  });

});

module.exports = router;
