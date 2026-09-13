const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        app: "ODERINDE GOLD INTELLIGENCE",
        version: "3.0.0",
        status: "ONLINE",
        serverTime: new Date().toISOString()
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        backend: true,
        ai: "READY",
        smc: "READY",
        websocket: "COMING SOON",
        marketData: "COMING SOON"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
