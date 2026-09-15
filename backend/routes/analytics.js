const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    goldStrength: "Strong",
    marketPressure: "Bullish",
    fearGreed: "Greed",
    institutionActivity: "High",
    aiConfidence: "92%",
    buyers: "71%",
    sellers: "29%",
    trendScore: 89,
    marketMomentum: "Strong",
    volatilityIndex: "Medium"
  });
});

module.exports = router;
