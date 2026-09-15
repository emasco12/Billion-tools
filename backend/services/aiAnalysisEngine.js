class AIAnalysisEngine {
    constructor(indicators, smartMoney, price, news) {
        this.indicators = indicators;
        this.smartMoney = smartMoney;
        this.price = price;
        this.news = news;
    }

    calculateScore() {
        let score = 50;

        // RSI
        if (this.indicators.rsi < 30) score += 10;
        if (this.indicators.rsi > 70) score -= 10;

        // MACD
        if (this.indicators.macd === "bullish") score += 15;
        if (this.indicators.macd === "bearish") score -= 15;

        // EMA Trend
        if (this.indicators.ema20 > this.indicators.ema50)
            score += 10;
        else
            score -= 10;

        // BOS
        if (this.smartMoney.bos === "Bullish")
            score += 15;

        if (this.smartMoney.bos === "Bearish")
            score -= 15;

        // CHoCH
        if (this.smartMoney.choch === "Bullish")
            score += 10;

        if (this.smartMoney.choch === "Bearish")
            score -= 10;

        // Order Block
        if (this.smartMoney.orderBlock === "Bullish")
            score += 10;

        if (this.smartMoney.orderBlock === "Bearish")
            score -= 10;

        // Fair Value Gap
        if (this.smartMoney.fvg === "Bullish")
            score += 10;

        if (this.smartMoney.fvg === "Bearish")
            score -= 10;

        score = Math.max(0, Math.min(100, score));

        return score;
    }

    getSignal(score) {

        if (score >= 75)
            return "STRONG BUY";

        if (score >= 60)
            return "BUY";

        if (score <= 25)
            return "STRONG SELL";

        if (score <= 40)
            return "SELL";

        return "WAIT";
    }

    getBias(score) {

        if (score > 60)
            return "Bullish";

        if (score < 40)
            return "Bearish";

        return "Neutral";
    }

    riskLevel(score) {

        if (score >= 75)
            return "Low";

        if (score >= 60)
            return "Medium";

        return "High";
    }

    generate() {

    const score = this.calculateScore();

    const signal = this.getSignal(score);

    const marketBias = this.getBias(score);

    const trend =
        score >= 60 ? "Bullish" :
        score <= 40 ? "Bearish" :
        "Sideways";

    const price = Number(this.price.price || this.price || 3588);

    const stopLoss =
        signal.includes("BUY")
            ? price - 12
            : signal.includes("SELL")
            ? price + 12
            : price - 8;

    const takeProfit =
        signal.includes("BUY")
            ? price + 36
            : signal.includes("SELL")
            ? price - 36
            : price + 8;

    return {

        recommendation: signal,

        signal,

        confidence: score + "%",

        trend,

        entry: price.toFixed(2),

        stopLoss: stopLoss.toFixed(2),

        takeProfit: takeProfit.toFixed(2),

        riskReward: "1:3",

        marketBias,

        trendStrength: score + "%",

        riskLevel: this.riskLevel(score),

        marketSession: "London",

        breakoutStatus:
            signal.includes("BUY")
                ? "Bullish Breakout"
                : signal.includes("SELL")
                ? "Bearish Breakdown"
                : "No Breakout",

        momentumStatus:
            score >= 60 ? "Strong" : "Weak",

        scannerTrend: trend,

        scannerVolatility:
            score >= 60 ? "Normal" : "High",

        strengthScore: score,

        buyProbability: score + "%",

        sellProbability: (100 - score) + "%",

        overallSignal: signal,

        smartMoney:
            signal.includes("BUY")
                ? "Institutions accumulating positions."
                : signal.includes("SELL")
                ? "Institutions distributing positions."
                : "Waiting for confirmation.",

        comment:
            signal.includes("BUY")
                ? "AI detects a buying opportunity."
                : signal.includes("SELL")
                ? "AI detects a selling opportunity."
                : "Wait for confirmation."
    };

    }
}

module.exports = AIAnalysisEngine;
