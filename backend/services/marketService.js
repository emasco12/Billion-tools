const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 10 });

async function getMarketData() {
  const cached = cache.get("gold");
  if (cached) return cached;

  try {
    const response = await axios.get(
      "https://www.goldapi.io/api/XAU/USD",
      {
        headers: {
          "x-access-token": process.env.GOLD_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    const data = {
      price: response.data.price,
      change: response.data.chp + "%"
    };

    cache.set("gold", data);

    return data;

  } catch (err) {
    console.error(err.response?.data || err.message);

    return {
      price: "--",
      change: "--"
    };
  }
}

module.exports = { getMarketData };
