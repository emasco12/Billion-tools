function analyseMarket(price) {

    let trend = "Sideways";
    let signal = "WAIT";
    let confidence = 50;

    // Trend

    if (price > 3600) {
        trend = "Bullish";
        signal = "BUY";
        confidence = 82;
    }

    if (price < 3550) {
        trend = "Bearish";
        signal = "SELL";
        confidence = 81;
    }

    const stopLoss =
        (price - 8).toFixed(2);

    const takeProfit1 =
        (price + 16).toFixed(2);

    const takeProfit2 =
        (price + 32).toFixed(2);

    const takeProfit3 =
        (price + 50).toFixed(2);

    return {

        recommendation: signal,

        confidence,

        trend,

        volatility:
            "Normal",

        entry:
            price.toFixed(2),

        stopLoss,

        takeProfit:
            takeProfit1,

        tp2:
            takeProfit2,

        tp3:
            takeProfit3,

        riskReward:
            "1:2",

        duration:
            "2–6 Hours"

    };

}

module.exports = analyseMarket;
