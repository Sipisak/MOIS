import React from "react";
import TradingViewWidget from "../components/market/TradingViewWidget";

const Market = () => {
return (
<div className="flex items-center justify-center h-screen">
  <div className="w-full h-[90vh]">
    <TradingViewWidget />
  </div>
</div>
);
};

export default Market;