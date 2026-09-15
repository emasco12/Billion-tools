const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    trend: "Bullish",
    signal: "BUY",
    confidence: "91%"
  });
});

module.exports = router;
