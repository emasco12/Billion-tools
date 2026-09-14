const express = require("express");
const router = express.Router();

const { getMarketData } = require("../services/marketService");

router.get("/", async (req, res) => {
  try {
    const data = await getMarketData();
    res.json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
