import { useEffect, useRef } from "react";

export default function TradingViewChart({ symbol }) {

  const container = useRef(null);

  useEffect(() => {

    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type = "text/javascript";

    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol || "OANDA:XAUUSD",
      interval: "15",
      timezone: "Africa/Lagos",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      save_image: true,
      calendar: true,
      support_host: "https://www.tradingview.com"
    });

    container.current.appendChild(script);

  }, [symbol]);

  return (
    <div
      className="tradingview-widget-container"
      style={{
        height: "500px",
        width: "100%",
        marginTop: "20px",
        borderRadius: "15px",
        overflow: "hidden"
      }}
    >
      <div
        ref={container}
        className="tradingview-widget-container__widget"
        style={{
          height: "100%",
          width: "100%"
        }}
      />
    </div>
  );

}
