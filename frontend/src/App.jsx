import TradingChart from "./components/TradingChart";
import { useEffect, useState } from "react";
import "./styles/global.css";

export default function App() {
  const [market, setMarket] = useState(null);
  const [ai, setAi] = useState(null);

  async function loadData() {
    try {
      const marketRes = await fetch("/api/market");
      const marketData = await marketRes.json();

      const aiRes = await fetch("/api/ai");
      const aiData = await aiRes.json();

      setMarket(marketData);
      setAi(aiData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadData();
    const timer = setInterval(loadData, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">

      <aside className="sidebar">

        <h2>ODERINDE GOLD</h2>

        <ul>

          <li>🏠 Dashboard</li>

          <li>📈 Markets</li>

          <li>💹 Forex</li>

          <li>🪙 Crypto</li>

          <li>🥇 Gold</li>

          <li>🧠 Smart Money</li>

          <li>🤖 AI Assistant</li>

          <li>📒 Journal</li>

          <li>⚙ Settings</li>

        </ul>

      </aside>

      <main className="main">

        <header className="topbar">

          <h1>Professional Trading Dashboard</h1>

        </header>

        <section className="cards">

          <div className="card">

            <h3>EUR/USD</h3>

            <h2>{market?.forex?.[0]?.price ?? "--"}</h2>

          </div>

          <div className="card">

            <h3>BTC/USD</h3>

            <h2>{market?.crypto?.[0]?.price ?? "--"}</h2>

          </div>

          <div className="card">

            <h3>Gold</h3>

            <h2>{market?.commodities?.[0]?.price ?? "--"}</h2>

          </div>

          <div className="card">

            <h3>Signal</h3>

            <h2>{ai?.recommendation ?? "WAIT"}</h2>

          </div>

        </section>

        <section className="chart">
  <TradingChart />
</section>

        <section className="bottom">

          <div className="panel">

            <h2>AI Assistant</h2>

            <p>{ai?.comment ?? "Loading..."}</p>

          </div>

          <div className="panel">

            <h2>Market Watch</h2>

            <ul>

              {market?.forex?.map(pair => (
                <li key={pair.symbol}>
                  {pair.symbol} — {pair.price}
                </li>
              ))}

            </ul>

          </div>

        </section>

      </main>

    </div>
  );
}
