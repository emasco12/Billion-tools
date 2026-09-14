export default function SignalCard() {

  const signal = {
    pair: "XAU/USD",
    action: "BUY",
    entry: "3588.40",
    stopLoss: "3579.20",
    takeProfit: "3615.00",
    confidence: "87%"
  };

  return (

    <div className="panel">

      <h2>AI Signal</h2>

      <h3>{signal.pair}</h3>

      <h1 style={{color:"#00ff88"}}>
        {signal.action}
      </h1>

      <p>Entry: {signal.entry}</p>

      <p>Stop Loss: {signal.stopLoss}</p>

      <p>Take Profit: {signal.takeProfit}</p>

      <p>Confidence: {signal.confidence}</p>

    </div>

  );

}
