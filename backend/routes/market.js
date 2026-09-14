const express = require("express");
const router = express.Router();

const { getMarketData } = require("../services/marketService");

router.get("/", async (req, res) => {
  try {
    const data = await getMarketData();

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to load market data",
    });
  }
});

module.exports = router;
