const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({
  stdTTL: 10,
});

async function getMarketData() {
  const cached = cache.get("market");

  if (cached) {
    return cached;
  }

  const data = {
    forex: [],
    crypto: [],
    commodities: []
  };

  cache.set("market", data);

  return data;
}

module.exports = {
  getMarketData,
};
