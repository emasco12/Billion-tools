const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

/* ===========================
   ROUTES
=========================== */

const marketRoutes = require("./routes/market");
const aiRoutes = require("./routes/ai");
const analysisRoutes = require("./routes/analysis");
const newsRoutes = require("./routes/news");
const authRoutes = require("./routes/auth");
const calendarRoutes = require("./routes/calendar");
const sentimentRoutes = require("./routes/sentiment");
const zonesRoutes = require("./routes/zones");
const analyticsRoutes = require("./routes/analytics");

/* ===========================
   MIDDLEWARE
=========================== */

app.use(cors());
app.use(express.json());

/* ===========================
   STATIC FILES
=========================== */

app.use(express.static(path.join(__dirname, "../public")));

/* ===========================
   API ROUTES
=========================== */

app.use("/api/market", marketRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/sentiment", sentimentRoutes);
app.use("/api/zones", zonesRoutes);
app.use("/api/analytics", analyticsRoutes);

/* ===========================
   HOME PAGE
=========================== */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

/* ===========================
   SERVER STATUS
=========================== */

app.get("/api/status", (req, res) => {

    res.json({

        success: true,
        status: "Server Running",

        version: "ODERINDE GOLD INTELLIGENCE v1.0",

        time: new Date().toISOString(),

        uptime: process.uptime()

    });

});

/* ===========================
   404
=========================== */

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Route not found"

    });

});

/* ===========================
   ERROR HANDLER
=========================== */

app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});

/* ===========================
   START SERVER
=========================== */

app.listen(PORT, () => {

    console.log("====================================");
    console.log(" ODERINDE GOLD INTELLIGENCE");
    console.log(" AI Gold Trading Dashboard");
    console.log("====================================");
    console.log(` Server running on port ${PORT}`);
    console.log(` Local: http://localhost:${PORT}`);
    console.log("====================================");

});
