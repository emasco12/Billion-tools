export default function MarketSentiment({ ai }) {
  const signal = ai?.recommendation || "WAIT";

  const color =
    signal === "BUY"
      ? "#16a34a"
      : signal === "SELL"
      ? "#dc2626"
      : "#eab308";

  return (
    <div
      className="panel"
      style={{
        border: `2px solid ${color}`,
        borderRadius: "10px",
        padding: "15px"
      }}
    >
      <h2>🌍 Market Sentiment</h2>

      <h1 style={{ color }}>{signal}</h1>

      <p>
        <strong>Trend:</strong> {ai?.trend}
      </p>

      <p>
        <strong>Confidence:</strong> {ai?.confidence}
      </p>

      <p>{ai?.comment}</p>
    </div>
  );
}
