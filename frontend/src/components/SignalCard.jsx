export default function SignalCard({ ai }) {

  if (!ai) return <div className="panel">Loading...</div>;

  return (
    <div className="panel">

      <h2>AI Signal</h2>

      <h1>{ai.recommendation}</h1>

      <p>Confidence: {ai.confidence}%</p>

      <p>Entry: {ai.entry}</p>

      <p>Stop Loss: {ai.stopLoss}</p>

      <p>Take Profit: {ai.takeProfit}</p>

      <p>Risk/Reward: {ai.riskReward}</p>

      <p>{ai.comment}</p>

    </div>
  );
}
