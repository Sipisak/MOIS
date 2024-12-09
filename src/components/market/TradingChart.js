import React, { useEffect, useRef } from 'react';

const TradingChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: chartContainer.current,
        width: '100%',
        height: 400,
        symbol: 'BTCUSDT',
        interval: '15',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={chartContainer} />;
};

export default TradingChart;
