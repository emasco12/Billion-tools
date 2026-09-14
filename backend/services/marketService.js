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

    const btc = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    );

    const eth = await axios.get(
      "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
    );

    const quotes = twelve.data;

    const data = {
      forex: [
        quotes["EUR/USD"],
        quotes["GBP/USD"],
        quotes["USD/JPY"]
      ],
      commodities: [
        quotes["XAU/USD"],
        quotes["XAG/USD"],
        quotes["WTI/USD"]
      ],
      crypto: [
        { symbol: "BTC/USDT", price: btc.data.price },
        { symbol: "ETH/USDT", price: eth.data.price }
      ]
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
