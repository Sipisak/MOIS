import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import TradingViewWidget from "../components/market/TradingViewWidget";
import Ticker from "../components/market/Ticker";

const TradePage = () => {
  const [orderBook, setOrderBook] = useState([]);
  const [trades, setTrades] = useState([]);

  const ws = useRef(null);

  // Fetch Order Book and Trades
  useEffect(() => {
    fetchOrderBook();
    fetchMarketTrades();

    ws.current = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth20@100ms");

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setOrderBook(data.bids.slice(0, 10));
    };

    return () => ws.current.close();
  }, []);

  const fetchOrderBook = async () => {
    const response = await axios.get(
      "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=20"
    );
    setOrderBook(response.data.bids);
  };

  const fetchMarketTrades = async () => {
    const response = await axios.get(
      "https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=20"
    );
    setTrades(response.data);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      {/* Ticker Widget */}
      <div className="mb-4">
        <Ticker />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Order Book */}
        <div className="col-span-3 bg-gray-800 p-4 rounded shadow-lg">
          <h2 className="text-lg font-bold mb-4">Order Book</h2>
          <ul>
            {orderBook.map((order, index) => (
              <li key={index} className="flex justify-between text-sm">
                <span className="text-green-400">{order[0]}</span>
                <span className="text-red-400">{order[1]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chart Section */}
        <div className="col-span-6 bg-gray-800 p-4 rounded shadow-lg">
          <div className="h-[600px] w-full">
            <TradingViewWidget />
          </div>
        </div>

        {/* Market Trades */}
        <div className="col-span-3 bg-gray-800 p-4 rounded shadow-lg">
          <h2 className="text-lg font-bold mb-4">Market Trades</h2>
          <ul>
            {trades.map((trade, index) => (
              <li key={index} className="flex justify-between text-sm">
                <span>{trade.price}</span>
                <span>{trade.qty}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buy/Sell Panel */}
        <div className="col-span-12 bg-gray-800 p-4 rounded shadow-lg">
          <h2 className="text-lg font-bold mb-4">Trade BTC/USDT</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <h3 className="text-green-400 mb-2">Buy BTC</h3>
              <input
                type="number"
                placeholder="Amount"
                className="w-full p-2 rounded bg-gray-700"
              />
              <button className="mt-2 w-full bg-green-500 hover:bg-green-600 p-2 rounded">
                Buy BTC
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-red-400 mb-2">Sell BTC</h3>
              <input
                type="number"
                placeholder="Amount"
                className="w-full p-2 rounded bg-gray-700"
              />
              <button className="mt-2 w-full bg-red-500 hover:bg-red-600 p-2 rounded">
                Sell BTC
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
