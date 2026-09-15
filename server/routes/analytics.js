const router = require("express").Router();

router.get("/", (req, res) => {

    res.json({

        goldStrength: "92%",
        marketPressure: "Bullish",
        fearGreed: "Greed (74)",
        institutionActivity: "High",

        aiConfidence: "94%",

        buyers: "68%",
        sellers: "32%",

        trendScore: "9.2/10",
        marketMomentum: "Strong Bullish",

        volatilityIndex: "Medium"

    });

});

module.exports = router;
