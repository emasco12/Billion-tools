export default function PriceTicker({ market }) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "12px",
        marginBottom: "20px",
        borderRadius: "10px"
      }}
    >
      <strong>Market Prices</strong>

      <p>
        EUR/USD: {market?.forex?.[0]?.price ?? "--"} |
        BTC/USD: {market?.crypto?.[0]?.price ?? "--"} |
        Gold: {market?.commodities?.[0]?.price ?? "--"}
      </p>
    </div>
  );
}
