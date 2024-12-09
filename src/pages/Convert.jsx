import React, { useState } from "react";

const tokens = ["ETH", "BTC", "USDT", "DAI", "BNB"];

const TokenDropdown = ({ selectedToken, setSelectedToken }) => {
  return (
    <div className="relative">
      <select
        className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        value={selectedToken}
        onChange={(e) => setSelectedToken(e.target.value)}
      >
        <option value="">Select Token</option>
        {tokens.map((token) => (
          <option key={token} value={token}>
            {token}
          </option>
        ))}
      </select>
    </div>
  );
};

const calculatePriceImpact = (fromAmount, toAmount) => {
  if (!fromAmount || !toAmount) return 0;
  const impact = ((fromAmount - toAmount) / fromAmount) * 100;
  return impact.toFixed(2);
};

const getTransactionFee = () => {
  return "0.003 ETH";
};

const Convert = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const priceImpact = calculatePriceImpact(fromAmount, toAmount);
  const transactionFee = getTransactionFee();

  const handleSwap = () => {
    alert(`Swapping ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-300">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">Token Swap</h2>

        {/* From Token */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">From</label>
          <div className="flex space-x-2">
            <TokenDropdown selectedToken={fromToken} setSelectedToken={setFromToken} />
            <input
              type="number"
              placeholder="Amount"
              className="w-1/3 px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
            />
          </div>
        </div>

        {/* To Token */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">To</label>
          <div className="flex space-x-2">
            <TokenDropdown selectedToken={toToken} setSelectedToken={setToToken} />
            <input
              type="number"
              placeholder="Amount"
              className="w-1/3 px-3 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
            />
          </div>
        </div>

        {/* Price Impact */}
        <div className="mt-4 text-sm">
          <p className={`font-semibold ${priceImpact > 5 ? "text-red-500" : "text-gray-300"}`}>
            Price Impact: {priceImpact}%
          </p>
        </div>

        {/* Transaction Fee */}
        <div className="mt-4 text-sm text-gray-300">
          <p>Estimated Transaction Fee: {transactionFee}</p>
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          className="w-full bg-yellow-500 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-6"
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default Convert;
