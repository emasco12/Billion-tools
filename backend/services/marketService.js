const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 10 });

async function getMarketData() {
  const cached = cache.get("market");
  if (cached) return cached;

  // ... your existing market service code here ...

  return {
    forex: [],
    commodities: [],
    crypto: []
  };
}

module.exports = { getMarketData };
