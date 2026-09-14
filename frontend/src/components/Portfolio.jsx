export default function Portfolio() {

  const stats = {
    balance: 10000,
    equity: 10420,
    profit: 420,
    trades: 28,
    winRate: 71
  };

  return (
    <div className="panel">

      <h2>Portfolio</h2>

      <p><strong>Balance:</strong> ${stats.balance}</p>

      <p><strong>Equity:</strong> ${stats.equity}</p>

      <p style={{ color: "#00ff88" }}>
        <strong>Profit:</strong> +${stats.profit}
      </p>

      <p><strong>Total Trades:</strong> {stats.trades}</p>

      <p><strong>Win Rate:</strong> {stats.winRate}%</p>

    </div>
  );
}
