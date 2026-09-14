import { useState } from "react";

const markets = [
  "Forex",
  "Crypto",
  "Gold",
  "Stocks",
  "Indices"
];

export default function MarketScanner() {

  const [active, setActive] = useState("Forex");

  return (
    <div className="panel">

      <h2>Market Scanner</h2>

      <div className="market-grid">

        {markets.map((market) => (

          <button
            key={market}
            className={
              active === market
                ? "market-btn active"
                : "market-btn"
            }
            onClick={() => setActive(market)}
          >
            {market}
          </button>

        ))}

      </div>

      <br />

      <h3>{active} Market</h3>

      <p>
        Live market opportunities for {active} will appear here.
      </p>

    </div>
  );

}
