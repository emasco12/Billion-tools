export default function SmartMoney({ ai }) {

  const data = ai || {
    bos: "Bullish",
    choch: "Not Detected",
    orderBlock: "Demand Zone",
    fvg: "Bullish FVG",
    liquidity: "Buy-side Liquidity",
    trend: "Bullish"
  };

  return (
    <div className="panel">

      <h2>Smart Money Concepts</h2>

      <p><strong>Trend:</strong> {data.trend}</p>

      <p><strong>BOS:</strong> {data.bos}</p>

      <p><strong>CHoCH:</strong> {data.choch}</p>

      <p><strong>Order Block:</strong> {data.orderBlock}</p>

      <p><strong>Fair Value Gap:</strong> {data.fvg}</p>

      <p><strong>Liquidity:</strong> {data.liquidity}</p>

    </div>
  );
}
