const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 10 });

async function getMarketData() {
  const cached = cache.get("gold");
  if (cached) return cached;

  try {
    const response = await axios.get(
      `https://api.twelvedata.com/quote?symbol=XAU/USD&apikey=${process.env.TWELVE_DATA_API_KEY}`
    );

    const gold = response.data;

    const data = {
      price: gold.close || gold.price,
      change: gold.percent_change || "0%"
    };

    cache.set("gold", data);

    return data;
  } catch (err) {
    console.error(err.message);

    return {
      price: "--",
      change: "0%"
    };
  }
}

module.exports = { getMarketData };
