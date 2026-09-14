import { useState } from "react";

export default function RiskCalculator() {
  const [balance, setBalance] = useState(1000);
  const [risk, setRisk] = useState(2);

  const riskAmount = (balance * risk) / 100;

  return (
    <div className="panel">
      <h2>Risk Calculator</h2>

      <label>Account Balance ($)</label>
      <input
        type="number"
        value={balance}
        onChange={(e) => setBalance(Number(e.target.value))}
      />

      <br /><br />

      <label>Risk Per Trade (%)</label>
      <input
        type="number"
        value={risk}
        onChange={(e) => setRisk(Number(e.target.value))}
      />

      <br /><br />

      <h3>Maximum Risk</h3>

      <h2 style={{ color: "#00ff88" }}>
        ${riskAmount.toFixed(2)}
      </h2>
    </div>
  );
}
