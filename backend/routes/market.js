const express = require("express");
const router = express.Router();

const { getMarketData } = require("../services/marketService");

router.get("/", async (req, res) => {
  const data = await getMarketData();

  res.json({
    success: true,
    price: data.price,
    change: data.change,
    updated: new Date().toLocaleTimeString()
  });
});

module.exports = router;
