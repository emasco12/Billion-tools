const router = require("express").Router();

router.get("/", async (req, res) => {

    const signals = ["BUY", "SELL", "WAIT"];

    const randomSignal = () =>
        signals[Math.floor(Math.random() * signals.length)];

    res.json({

        // Multi-Timeframe
        tf1m: randomSignal(),
        tf5m: randomSignal(),
        tf15m: randomSignal(),
        tf30m: randomSignal(),
        tf1h: randomSignal(),
        tf4h: randomSignal(),
        tf1d: randomSignal(),

        // Technical Indicators
        rsi: (Math.random() * 40 + 40).toFixed(2),
        macd: Math.random() > 0.5 ? "Bullish" : "Bearish",
        ema20: Math.random() > 0.5 ? "Bullish" : "Bearish",
        ema50: Math.random() > 0.5 ? "Bullish" : "Bearish",
        ema200: Math.random() > 0.5 ? "Bullish" : "Bearish",
        atr: (Math.random() * 20 + 15).toFixed(2),

        // Liquidity
        buyLiquidity: "Detected",
        sellLiquidity: "Detected",
        nearestLiquidity: (3580 + Math.random() * 40).toFixed(2),
        liquiditySweep: Math.random() > 0.5 ? "Completed" : "Waiting",

        // Institutional Analysis
        orderFlow: Math.random() > 0.5 ? "Bullish" : "Bearish",
        liquidityStatus: "Healthy",
        structure: Math.random() > 0.5 ? "Bullish Structure" : "Bearish Structure",
        institutions: "Active",
        recommendation: randomSignal(),

        // Smart Money Concepts
        bos: Math.random() > 0.5 ? "Bullish BOS" : "Bearish BOS",
        choch: Math.random() > 0.5 ? "Bullish CHoCH" : "Bearish CHoCH",
        orderBlock: "Detected",
        fvg: "Detected",

        // AI
        coach: "Trade only after confirmation. Avoid chasing candles and maintain proper risk management.",

        marketReason:
            "Current market structure suggests institutions are active around major liquidity zones. Wait for confirmation before entering."

    });

});

module.exports = router;
