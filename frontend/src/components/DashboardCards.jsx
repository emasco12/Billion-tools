export default function DashboardCards({ market, ai }) {
  return (
    <div className="cards">
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
        <h3>AI Signal</h3>
        <h2>{ai?.recommendation ?? "WAIT"}</h2>
      </div>
    </div>
  );
}
