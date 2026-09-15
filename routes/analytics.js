const router = require("express").Router();

router.get("/", (req, res) => {

    res.json({

        goldStrength: "91%",

        marketPressure: "Bullish",

        fearGreed: "Greed (74)",

        institutionActivity: "High",

        aiConfidence: "94%",

        buyers: "68%",

        sellers: "32%",

        trendScore: "89/100",

        marketMomentum: "Strong",

        volatilityIndex: "Medium"

    });

});

module.exports = router;
