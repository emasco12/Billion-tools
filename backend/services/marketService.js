const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 10 });

async function getMarketData() {
  const cached = cache.get("market");
  if (cached) return cached;

  try {
    const twelve = await axios.get(
      `https://api.twelvedata.com/quote?symbol=EUR/USD,GBP/USD,USD/JPY,XAU/USD,XAG/USD,WTI/USD&apikey=${process.env.TWELVE_DATA_API_KEY}`
    );

    
    const quotes = twelve.data;

    const data = {
  gold: quotes["XAU/USD"]
};

    cache.set("market", data);
    return data;
  } catch (err) {
    console.error(err.message);

    return {
      forex: [],
      commodities: [],
      crypto: []
    };
  }
}

module.exports = { getMarketData };
