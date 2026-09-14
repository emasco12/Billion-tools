import { useState } from "react";

export default function TradingJournal() {
  const [trades, setTrades] = useState([]);
  const [pair, setPair] = useState("");
  const [result, setResult] = useState("WIN");

  function addTrade() {
    if (!pair.trim()) return;

    setTrades([
      ...trades,
      {
        pair,
        result,
        date: new Date().toLocaleDateString()
      }
    ]);

    setPair("");
  }

  return (
    <div className="panel">
      <h2>Trading Journal</h2>

      <input
        type="text"
        placeholder="Pair (e.g. XAU/USD)"
        value={pair}
        onChange={(e) => setPair(e.target.value)}
      />

      <br /><br />

      <select
        value={result}
        onChange={(e) => setResult(e.target.value)}
      >
        <option>WIN</option>
        <option>LOSS</option>
        <option>BREAK EVEN</option>
      </select>

      <br /><br />

      <button onClick={addTrade}>
        Save Trade
      </button>

      <hr />

      {trades.map((trade, index) => (
        <div key={index}>
          <strong>{trade.pair}</strong><br />
          {trade.result}<br />
          {trade.date}
          <hr />
        </div>
      ))}
    </div>
  );
          }
