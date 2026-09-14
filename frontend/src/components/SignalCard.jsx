export default function SignalCard({ ai }) {

  const signal = ai || {
    pair: "XAU/USD",
    action: "BUY",
    confidence: 87,
    entry: "3588.40",
    stopLoss: "3579.20",
    takeProfit: "3615.00",
    riskReward: "1 : 3"
  };

  return (
    <div className="panel">

      <h2>AI Trading Signal</h2>

      <h3>{signal.pair}</h3>

      <h1
        style={{
          color:
            signal.action === "BUY"
              ? "#00ff88"
              : signal.action === "SELL"
              ? "#ff5252"
              : "#ffd600"
        }}
      >
        {signal.action}
      </h1>

      <p>Confidence: {signal.confidence}%</p>
      <p>Entry: {signal.entry}</p>
      <p>Stop Loss: {signal.stopLoss}</p>
      <p>Take Profit: {signal.takeProfit}</p>
      <p>Risk / Reward: {signal.riskReward}</p>

    </div>
  );
}
