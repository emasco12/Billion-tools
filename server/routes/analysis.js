const signal = randomSignal();

res.json({

    // Multi-Timeframe
    tf1m: signal,
    tf5m: signal,
    tf15m: signal,
    tf30m: signal,
    tf1h: signal,
    tf4h: signal,
    tf1d: signal,

    // Technical Indicators
    rsi:
        signal === "BUY"
            ? "68.25"
            : signal === "SELL"
            ? "33.80"
            : "50.15",

    macd: signal === "BUY" ? "Bullish" : signal === "SELL" ? "Bearish" : "Neutral",

    ema20: signal === "BUY" ? "Bullish" : "Bearish",
    ema50: signal === "BUY" ? "Bullish" : "Bearish",
    ema200: signal === "BUY" ? "Bullish" : "Bearish",

    atr: (Math.random() * 8 + 18).toFixed(2),

    // Liquidity
    buyLiquidity: "Detected",
    sellLiquidity: "Detected",
    nearestLiquidity: (3580 + Math.random() * 40).toFixed(2),
    liquiditySweep: signal === "WAIT" ? "Waiting" : "Completed",

    // Institutional
    orderFlow: signal === "BUY" ? "Bullish" : "Bearish",
    liquidityStatus: "Healthy",
    structure:
        signal === "BUY"
            ? "Bullish Structure"
            : signal === "SELL"
            ? "Bearish Structure"
            : "Range",

    institutions:
        signal === "BUY"
            ? "Accumulating"
            : signal === "SELL"
            ? "Distributing"
            : "Neutral",

    recommendation: signal,

    // Smart Money
    bos:
        signal === "BUY"
            ? "Bullish BOS"
            : "Bearish BOS",

    choch:
        signal === "BUY"
            ? "Bullish CHoCH"
            : "Bearish CHoCH",

    orderBlock:
        signal === "BUY"
            ? "Bullish Order Block"
            : "Bearish Order Block",

    fvg:
        signal === "BUY"
            ? "Bullish FVG"
            : "Bearish FVG",

    coach:
        signal === "BUY"
            ? "Buy only after a pullback into demand."
            : signal === "SELL"
            ? "Wait for a retracement before selling."
            : "Stay out until a clear confirmation appears.",

    marketReason:
        signal === "BUY"
            ? "Institutions are accumulating positions above key support."
            : signal === "SELL"
            ? "Institutional selling pressure is dominating the market."
            : "Price is consolidating inside a liquidity range."

});
