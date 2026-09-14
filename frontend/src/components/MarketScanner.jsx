export default function MarketScanner({ market }) {

  const forex = market?.forex || [];
  const crypto = market?.crypto || [];
  const commodities = market?.commodities || [];

  return (
    <div className="panel">

      <h2>Market Scanner</h2>

      <h3>Forex</h3>

      {forex.map(item => (
        <p key={item.symbol}>
          {item.symbol} : {item.price}
        </p>
      ))}

      <br />

      <h3>Crypto</h3>

      {crypto.map(item => (
        <p key={item.symbol}>
          {item.symbol} : {item.price}
        </p>
      ))}

      <br />

      <h3>Commodities</h3>

      {commodities.map(item => (
        <p key={item.symbol}>
          {item.symbol} : {item.price}
        </p>
      ))}

    </div>
  );
}
