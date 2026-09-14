const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 10 });

async function getMarketData() {
  const cached = cache.get("gold");
  if (cached) return cached;

  // 1. GoldAPI
  try {
    const res = await axios.get("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": process.env.GOLD_API_KEY,
      },
    });

    const data = {
      price: res.data.price,
      change: res.data.ch || "0%",
    };

    cache.set("gold", data);
    return data;
  } catch (e) {
    console.log("GoldAPI failed");
  }

  // 2. Finnhub
  try {
    const res = await axios.get(
      `https://finnhub.io/api/v1/quote?symbol=OANDA:XAU_USD&token=${process.env.FINNHUB_API_KEY}`
    );

    const data = {
      price: res.data.c,
      change: res.data.dp + "%",
    };

    cache.set("gold", data);
    return data;
  } catch (e) {
    console.log("Finnhub failed");
  }

  // 3. Alpha Vantage
  try {
    const res = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=XAUUSD&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );

    const quote = res.data["Global Quote"];

    const data = {
      price: quote["05. price"],
      change: quote["10. change percent"],
    };

    cache.set("gold", data);
    return data;
  } catch (e) {
    console.log("Alpha Vantage failed");
  }

  return {
    price: "--",
    change: "0%",
  };
}

module.exports = { getMarketData };
