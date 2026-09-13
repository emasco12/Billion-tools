import { useState } from "react";

const markets = [
  { symbol: "OANDA:EURUSD", name: "EUR/USD" },
  { symbol: "OANDA:GBPUSD", name: "GBP/USD" },
  { symbol: "OANDA:USDJPY", name: "USD/JPY" },
  { symbol: "OANDA:XAUUSD", name: "Gold" },
  { symbol: "BINANCE:BTCUSDT", name: "Bitcoin" },
  { symbol: "BINANCE:ETHUSDT", name: "Ethereum" },
  { symbol: "FOREXCOM:US30", name: "US30" },
  { symbol: "FOREXCOM:NSXUSD", name: "NAS100" }
];

export default function MarketScreener({ onSelect }) {
  const [active, setActive] = useState(markets[3].symbol);

  function selectMarket(item) {
    setActive(item.symbol);
    if (onSelect) onSelect(item.symbol);
  }

  return (
    <div className="panel">

      <h2>Market Screener</h2>

      <div className="market-grid">

        {markets.map((item) => (

          <button
            key={item.symbol}
            className={
              active === item.symbol
                ? "market-btn active"
                : "market-btn"
            }
            onClick={() => selectMarket(item)}
          >
            {item.name}
          </button>

        ))}

      </div>

    </div>
  );
}
