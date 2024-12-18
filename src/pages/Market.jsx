import React from "react";
import TradingViewWidget from "../components/market/TradingViewWidget";
import Ticker from "../components/market/Ticker";


const Market = () => {
return (
<div className="flex items-center justify-center h-screen">
  <div className="w-full h-[90vh]">
    <TradingViewWidget />
  </div>
 {/*   <Ticker /> */} 
</div>
);
};

export default Market;