import { useEffect, useRef } from "react";

export default function TradingChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "FX:EURUSD",
      interval: "15",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      hide_top_toolbar: false,
      withdateranges: true,
      save_image: true
    });

    chartRef.current.innerHTML = "";
    chartRef.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: "500px", width: "100%" }}
    >
      <div
        ref={chartRef}
        style={{ height: "100%", width: "100%" }}
      ></div>
    </div>
  );
}
