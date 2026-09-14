const express = require("express");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    return res.status(201).json({
        success: true,
        message: "User registered successfully.",
        user: {
            id: Date.now(),
            name,
            email
        }
    });

});

// Login
router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required."
        });
    }

    return res.json({
        success: true,
        token: "oderinde-gold-demo-token",
        user: {
            id: 1,
            name: "Demo User",
            email
        }
    });

});

// Profile
router.get("/profile", (req, res) => {

    res.json({
        success: true,
        user: {
            id: 1,
            name: "Demo User",
            email: "demo@oderinde.ai"
        }
    });

});

module.exports = router;
