const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      time: "08:30 UTC",
      currency: "USD",
      event: "Core CPI",
      impact: "High",
      forecast: "0.3%",
      previous: "0.2%"
    },
    {
      id: 2,
      time: "12:00 UTC",
      currency: "EUR",
      event: "ECB Interest Rate",
      impact: "High",
      forecast: "2.15%",
      previous: "2.15%"
    },
    {
      id: 3,
      time: "14:30 UTC",
      currency: "GBP",
      event: "GDP",
      impact: "Medium",
      forecast: "0.4%",
      previous: "0.3%"
    }
  ]);
});

module.exports = router;
