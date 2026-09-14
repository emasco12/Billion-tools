const router = require("express").Router();
const { getMarketData } = require("../services/marketService");

router.get("/", async (req, res) => {
  try {
    const marketData = await getMarketData();
    res.json(marketData);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to load market data."
    });
  }
});

module.exports = router;
