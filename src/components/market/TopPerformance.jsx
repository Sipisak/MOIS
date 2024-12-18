
import React, { useEffect, useRef } from "react";

const TopPerformance = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Check if the script is already added
    if (widgetRef.current && !widgetRef.current.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.async = true;
      script.innerHTML = `
      {
        "width": "100%",
        "height": 550,
        "defaultColumn": "performance",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "dark",
        "locale": "en"
      }`;
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ width: "100%", margin: "0 auto" }}>
      <div className="tradingview-widget-container__widget" ref={widgetRef}></div>
      <div className="tradingview-widget-copyright text-center mt-2">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="text-blue-500 hover:underline">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TopPerformance;
