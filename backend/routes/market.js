const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    forex: [
      { symbol: "EUR/USD", price: 1.1732, change: "+0.21%" },
      { symbol: "GBP/USD", price: 1.3625, change: "-0.08%" },
      { symbol: "USD/JPY", price: 147.83, change: "+0.14%" }
    ],
    crypto: [
      { symbol: "BTC/USD", price: 118250.45, change: "+1.42%" },
      { symbol: "ETH/USD", price: 4821.60, change: "+0.86%" }
    ],
    commodities: [
      { symbol: "GOLD", price: 3528.40, change: "+0.15%" },
      { symbol: "SILVER", price: 42.63, change: "-0.12%" }
    ]
  });
});

module.exports = router;
