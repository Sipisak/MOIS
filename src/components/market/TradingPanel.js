
import React, { useState } from 'react';

const TradingPanel = () => {
  const [form, setForm] = useState({
    symbol: 'BTCUSDT', 
    side: 'BUY',       
    type: 'LIMIT',     
    price: '',         
    amount: '',        
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    
    fetch('http://localhost:8080/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Order placed successfully: ${JSON.stringify(data)}`);
      })
      .catch((err) => {
        alert(`Error placing order: ${err.message}`);
      });
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">Trading Panel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Symbol */}
        <div>
          <label htmlFor="symbol" className="block text-sm font-medium mb-1">Trading Pair</label>
          <select
            id="symbol"
            name="symbol"
            value={form.symbol}
            onChange={handleChange}
            className="p-2 bg-gray-700 rounded w-full"
          >
            <option value="BTCUSDT">BTC/USDT</option>
            <option value="ETHUSDT">ETH/USDT</option>
            <option value="BNBUSDT">BNB/USDT</option>
          </select>
        </div>

        {/* Side (Buy/Sell) */}
        <div>
          <label className="block text-sm font-medium mb-1">Side</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="side"
                value="BUY"
                checked={form.side === 'BUY'}
                onChange={handleChange}
                className="mr-2"
              />
              Buy
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="side"
                value="SELL"
                checked={form.side === 'SELL'}
                onChange={handleChange}
                className="mr-2"
              />
              Sell
            </label>
          </div>
        </div>

        {/* Order Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium mb-1">Order Type</label>
          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="p-2 bg-gray-700 rounded w-full"
          >
            <option value="LIMIT">Limit</option>
            <option value="MARKET">Market</option>
          </select>
        </div>

        {/* Price (visible for LIMIT orders only) */}
        {form.type === 'LIMIT' && (
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="p-2 bg-gray-700 rounded w-full"
              required
            />
          </div>
        )}

        {/* Amount */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className="p-2 bg-gray-700 rounded w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradingPanel;
