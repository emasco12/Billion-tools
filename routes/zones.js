const router = require("express").Router();

router.get("/", async (req, res) => {

    const price = 3588.40;

    res.json({

        zoneEntry: price.toFixed(2),

        buyZone: `${(price - 8).toFixed(2)} - ${(price - 3).toFixed(2)}`,

        sellZone: `${(price + 3).toFixed(2)} - ${(price + 8).toFixed(2)}`,

        supportZone: (price - 20).toFixed(2),

        resistanceZone: (price + 20).toFixed(2),

        institutionOB: "Bullish Order Block",

        demandZone: `${(price - 15).toFixed(2)} - ${(price - 10).toFixed(2)}`,

        supplyZone: `${(price + 10).toFixed(2)} - ${(price + 15).toFixed(2)}`,

        liquidityZone: (price + 5).toFixed(2),

        breakoutZone: (price + 25).toFixed(2)

    });

});

module.exports = router;
