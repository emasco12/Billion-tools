export default function Watchlist({ market }) {

  if (!market) return null;

  return (

    <div className="panel">

      <h2>Market Watch</h2>

      <ul>

        {market.forex.map(pair => (

          <li key={pair.symbol}>

            {pair.symbol} — {pair.price}

          </li>

        ))}

        {market.crypto.map(pair => (

          <li key={pair.symbol}>

            {pair.symbol} — {pair.price}

          </li>

        ))}

      </ul>

    </div>

  );

}
