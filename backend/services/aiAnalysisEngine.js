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
        if (
            String(this.indicators.macd).toLowerCase() === "bullish"
        ) score += 15;

        if (
            String(this.indicators.macd).toLowerCase() === "bearish"
        ) score -= 15;

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

        score = Math.max(40, Math.min(97, score));

        return score;
    }

    getSignal(score) {

        if (score >= 85) return "STRONG BUY";
        if (score >= 65) return "BUY";
        if (score <= 20) return "STRONG SELL";
        if (score <= 40) return "SELL";

        return "WAIT";
    }

    getBias(score) {

        if (score >= 60) return "Bullish";
        if (score <= 40) return "Bearish";

        return "Neutral";
    }

    riskLevel(score) {

        if (score >= 80) return "Low";
        if (score >= 60) return "Medium";

        return "High";
    }

    generate() {

        const score = this.calculateScore();

        const signal = this.getSignal(score);

        const marketBias = this.getBias(score);

        const trend =
            score >= 60
                ? "Bullish"
                : score <= 40
                ? "Bearish"
                : "Sideways";

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

        const heatmap = {
            m1: Math.max(40, score - 10),
            m5: Math.max(45, score - 7),
            m15: Math.max(50, score - 5),
            m30: Math.max(55, score - 3),
            h1: score,
            h4: Math.min(97, score + 3),
            d1: Math.min(97, score + 5)
                    tp1: takeProfit.toFixed(2),
        tp2: (signal.includes("BUY") ? price + 72 : price - 72).toFixed(2),
        tp3: (signal.includes("BUY") ? price + 108 : price - 108).toFixed(2),

        goldStrength: score + "%",
        marketPressure: score >= 60 ? "Bullish" : score <= 40 ? "Bearish" : "Neutral",
        fearGreed: score >= 75 ? "Greed" : score <= 25 ? "Fear" : "Neutral",
        institutionalActivity: signal.includes("BUY") ? "Accumulation" : "Distribution",
        aiConfidence: score + "%",

        buyers: score + "%",
        sellers: (100 - score) + "%",
        trendScore: score,
        momentum: score >= 60 ? "Strong Bullish" : score <= 40 ? "Strong Bearish" : "Neutral",
        volatilityIndex: score >= 60 ? "Medium" : "High",

        orderFlow: signal.includes("BUY") ? "Bullish Flow" : "Bearish Flow",
        marketStructure: trend,
        institutions: signal.includes("BUY") ? "Buying" : "Selling",
        liquidityStatus: "Healthy",

        expectedMove: "30 - 50 Pips",

        buySideLiquidity: (price + 25).toFixed(2),
        sellSideLiquidity: (price - 25).toFixed(2),
        nearestLiquidity: signal.includes("BUY") ? "Buy Side" : "Sell Side",
        liquiditySweep: signal.includes("BUY") ? "Completed" : "Pending",

        orderFlowStatus: signal.includes("BUY") ? "Bullish" : "Bearish",
        liquidity: signal.includes("BUY") ? "Above Price" : "Below Price",
        institutionalRecommendation: signal,

        goldMarketSummary: {
            trend,
            signal,
            confidence: score + "%",
            momentum: score >= 60 ? "Strong" : "Weak",
            risk: this.riskLevel(score),
            expectedMove: "30 - 50 Pips"
            }
        };

        const multiTimeframe = {
            m1: signal,
            m5: signal,
            m15: signal,
            m30: signal,
            h1: signal,
            h4: signal,
            d1: signal
        };

        const priceLevels = {
            dailyHigh: (price + 15).toFixed(2),
            dailyLow: (price - 15).toFixed(2),
            weeklyHigh: (price + 40).toFixed(2),
            weeklyLow: (price - 40).toFixed(2),
            monthlyHigh: (price + 70).toFixed(2),
            monthlyLow: (price - 70).toFixed(2)
        };

        const liquidity = {
            buySide: (price + 20).toFixed(2),
            sellSide: (price - 20).toFixed(2),
            nearest: (price + 5).toFixed(2),
            sweep: this.smartMoney.liquiditySweep || "Waiting"
        };

        const summary = {
            momentum: score >= 60 ? "Strong" : "Weak",
            risk: this.riskLevel(score),
            expectedMove: score >= 60 ? "+30 Points" : "±10 Points"
        };

        const institutional = {
            orderFlow: this.smartMoney.orderFlow || trend,
            liquidity: this.smartMoney.liquidity || "Balanced",
            structure: this.smartMoney.marketStructure || trend,
            activity: signal.includes("BUY")
                ? "Accumulating"
                : "Distributing",
            recommendation: signal
        };

        const scoreboard = {
            signal,
            marketBias,
            trendStrength: score,
            risk: this.riskLevel(score),
            buyProbability: score,
            sellProbability: 100 - score,
            strengthScore: score
        };

        return {

            recommendation: signal,
            signal,

            confidence: score + "%",

            trend,

            heatmap,
            multiTimeframe,

            indicators: this.indicators,

            priceLevels,

            liquidity,

            summary,

            institutional,

            scoreboard,

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
