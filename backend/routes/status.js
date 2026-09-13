const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "ODERINDE GOLD INTELLIGENCE API",
        version: "3.0"
    });
});

module.exports = router;
