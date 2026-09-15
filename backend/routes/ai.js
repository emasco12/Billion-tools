const router = require("express").Router();
const AIAnalysisEngine = require("../services/aiAnalysisEngine");

router.get("/", async (req, res) => {

    let currentPrice = 3588.40;

    try {
        const market = await fetch("https://billion-tools.onrender.com/api/market");
        const marketData = await market.json();

        if (marketData.commodities && marketData.commodities.length > 0) {
            currentPrice = Number(
                marketData.commodities[0].close ||
                marketData.commodities[0].price
            );
        }
    } catch (e) {
        console.log(e);
    }

    const indicators = {
        rsi: 56,
        macd: "bullish",
        ema20: currentPrice - 3,
        ema50: currentPrice - 10,
        ema200: currentPrice - 25,
        atr: 18
    };

    const smartMoney = {
        bos: "Bullish",
        choch: "Bullish",
        orderBlock: "Bullish",
        fvg: "Bullish"
    };

    const ai = new AIAnalysisEngine(
        indicators,
        smartMoney,
        { price: currentPrice },
        []
    );

    const analysis = ai.generate();

    res.json(analysis);

});

module.exports = router;
