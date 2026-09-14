const router = require("express").Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Gold rises as US Dollar weakens",
      source: "Reuters",
      impact: "High"
    },
    {
      id: 2,
      title: "Bitcoin breaks above key resistance",
      source: "CoinDesk",
      impact: "Medium"
    },
    {
      id: 3,
      title: "Federal Reserve expected to hold rates",
      source: "Bloomberg",
      impact: "High"
    },
    {
      id: 4,
      title: "Oil prices climb after supply concerns",
      source: "CNBC",
      impact: "Medium"
    },
    {
      id: 5,
      title: "US Non-Farm Payrolls scheduled this week",
      source: "Investing.com",
      impact: "High"
    }
  ]);
});

module.exports = router;
