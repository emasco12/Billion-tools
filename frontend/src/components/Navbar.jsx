export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >
      <div>
        <h1>ODERINDE GOLD INTELLIGENCE</h1>
        <p>Professional AI Trading Platform</p>
      </div>

      <div
        style={{
          background: "#00ff88",
          color: "#111",
          padding: "10px 18px",
          borderRadius: "10px",
          fontWeight: "bold"
        }}
      >
        LIVE
      </div>
    </header>
  );
}
