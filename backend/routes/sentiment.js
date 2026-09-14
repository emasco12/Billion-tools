const router = require("express").Router();

router.get("/", (req, res) => {

    const score = Math.floor(Math.random() * 41) + 60;

    let sentiment;

    if (score >= 75) {
        sentiment = "Bullish";
    } else if (score >= 55) {
        sentiment = "Neutral";
    } else {
        sentiment = "Bearish";
    }

    res.json({
        sentiment,
        score
    });

});

module.exports = router;
