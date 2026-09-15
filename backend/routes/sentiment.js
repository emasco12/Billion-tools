const router = require("express").Router();

router.get("/", (req, res) => {

    const score = Math.floor(Math.random() * 41) + 60;

    let sentiment;

    if (score >= 75) {
        sentiment = "Bullish";
    } else if (score <= 45) {
        sentiment = "Bearish";
    } else {
        sentiment = "Neutral";
    }

    res.json({
        sentiment,
        score
    });

});

module.exports = router;
