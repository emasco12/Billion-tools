const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        sentiment: "Bullish",
        score: 82
    });
});

module.exports = router;
