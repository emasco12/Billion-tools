const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 10 });

async function getMarketData() {
    const cached = cache.get("gold");

    if (cached) {
        return cached;
    }

    /* ===========================
       GOLD API
    =========================== */

    try {

        const res = await axios.get("https://www.goldapi.io/api/XAU/USD", {
            headers: {
                "x-access-token": process.env.GOLD_API_KEY
            }
        });

        if (res.data && res.data.price) {

            const data = {
                price: Number(res.data.price),
                change: res.data.ch ?? res.data.change ?? "0%"
            };

            cache.set("gold", data);

            console.log("✅ GoldAPI Connected");

            return data;
        }

    } catch (e) {

        console.error(
            "❌ GoldAPI Failed:",
            e.response?.data || e.message
        );

    }

    /* ===========================
       FINNHUB
    =========================== */

    try {

        const res = await axios.get(
            `https://finnhub.io/api/v1/quote?symbol=OANDA:XAU_USD&token=${process.env.FINNHUB_API_KEY}`
        );

        if (res.data && res.data.c) {

            const data = {
                price: Number(res.data.c),
                change: `${res.data.dp || 0}%`
            };

            cache.set("gold", data);

            console.log("✅ Finnhub Connected");

            return data;
        }

    } catch (e) {

        console.error(
            "❌ Finnhub Failed:",
            e.response?.data || e.message
        );

    }

    /* ===========================
       ALPHA VANTAGE
    =========================== */

    try {

        const res = await axios.get(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=XAUUSD&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
        );

        const quote = res.data["Global Quote"];

        if (quote) {

            const data = {
                price: Number(quote["05. price"]),
                change: quote["10. change percent"] || "0%"
            };

            cache.set("gold", data);

            console.log("✅ Alpha Vantage Connected");

            return data;
        }

    } catch (e) {

        console.error(
            "❌ Alpha Vantage Failed:",
            e.response?.data || e.message
        );

    }

    /* ===========================
       ALL FAILED
    =========================== */

    throw new Error("All market providers failed.");

}

module.exports = {
    getMarketData
};
