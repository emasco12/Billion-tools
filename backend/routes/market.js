const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {

  try {

    // Demo data (will be replaced with live API)

    res.json({

      forex: [
        { symbol: "EUR/USD", price: 1.1742, change: "+0.18%" },
        { symbol: "GBP/USD", price: 1.3615, change: "-0.11%" },
        { symbol: "USD/JPY", price: 147.83, change: "+0.34%" }
      ],

      crypto: [
        { symbol: "BTC/USD", price: 118450, change: "+2.11%" },
        { symbol: "ETH/USD", price: 4650, change: "+1.42%" }
      ],

      commodities: [
        { symbol: "XAU/USD", price: 3588.40, change: "+0.52%" },
        { symbol: "XAG/USD", price: 39.12, change: "-0.28%" },
        { symbol: "WTI OIL", price: 72.84, change: "+1.06%" }
      ],

      indices: [
        { symbol: "US30", price: 45530, change: "+0.43%" },
        { symbol: "NASDAQ", price: 23680, change: "+0.66%" },
        { symbol: "S&P500", price: 7124, change: "+0.29%" }
      ]

    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Unable to load market data"
    });

  }

});

module.exports = router;
