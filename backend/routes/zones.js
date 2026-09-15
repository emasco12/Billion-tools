const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    buyZone: "3325-3332",
    sellZone: "3360-3370",
    support: "3315",
    resistance: "3375"
  });
});

module.exports = router;
