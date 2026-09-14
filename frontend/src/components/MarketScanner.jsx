export default function MarketScanner({ market }) {

  if (!market) return <div className="panel">Loading Market...</div>;

  return (
    <div className="panel">

      <h2>Market Scanner</h2>

      <h3>Forex</h3>
      {market.forex.map(item => (
        <p key={item.symbol}>
          {item.symbol} : {item.price} ({item.change})
        </p>
      ))}

      <hr />

      <h3>Crypto</h3>
      {market.crypto.map(item => (
        <p key={item.symbol}>
          {item.symbol} : {item.price} ({item.change})
        </p>
      ))}

      <hr />

      <h3>Gold & Commodities</h3>
      {market.commodities.map(item => (
        <p key={item.symbol}>
          {item.symbol} : {item.price} ({item.change})
        </p>
      ))}

      <hr />

      <h3>Indices</h3>
      {market.indices.map(item => (
        <p key={item.symbol}>
          {item.symbol} : {item.price} ({item.change})
        </p>
      ))}

    </div>
  );
}
