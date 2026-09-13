const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json({

        recommendation: "BUY",

        confidence: "86%",

        comment:
            "Bullish momentum remains strong. Wait for a pullback into a demand zone before entering."

    });

});

module.exports = router;
