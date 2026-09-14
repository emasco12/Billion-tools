const express = require("express");
const router = express.Router();

const { getMarketData } = require("../services/marketService");

router.get("/", async (req, res) => {
    try {
        const market = await getMarketData();

        const gold = market.commodities && market.commodities.length > 0
            ? market.commodities[0]
            : {};

        res.json({
            success: true,
            price: gold.price || gold.close || "--",
            change: gold.percent_change || gold.change || "0%",
            updated: new Date().toLocaleTimeString()
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            price: "--",
            change: "--",
            updated: "--"
        });
    }
});

module.exports = router;
