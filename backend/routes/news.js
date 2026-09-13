const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json([

        {
            title: "Gold climbs as US Dollar weakens."
        },

        {
            title: "Bitcoin trades above key resistance."
        },

        {
            title: "Markets await major inflation data."
        }

    ]);

});

module.exports = router;
