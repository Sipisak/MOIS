
import React, { useState, useEffect } from "react";
import axios from "axios";

const CRYPTO_OPTIONS = [
  { label: "Bitcoin", value: "btc" },
  { label: "Ethereum", value: "eth" },
  { label: "Tether", value: "usdt" },
  { label: "BNB", value: "bnb" },
  { label: "Polygon", value: "matic-network" },
];

const Convert = () => {
  const [fromCurrency, setFromCurrency] = useState("eth");
  const [toCurrency, setToCurrency] = useState("btc");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      setIsLoading(true);

      // CoinGecko API endpoint
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency},${toCurrency}&vs_currencies=usd`;

      // Fetch exchange rates for both currencies in USD
      const response = await axios.get(url);

      const fromPrice = response.data[fromCurrency].usd;
      const toPrice = response.data[toCurrency].usd;

      // Perform conversion
      const result = (amount * fromPrice) / toPrice;
      setConvertedAmount(result.toFixed(6));
    } catch (error) {
      console.error("Error fetching data from CoinGecko API", error);
      alert("Failed to fetch conversion rates. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg text-white shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Convert</h2>

      {/* From Section */}
      <div className="mb-4">
        <label className="block text-sm mb-2">From</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded"
        >
          {CRYPTO_OPTIONS.map((crypto) => (
            <option key={crypto.value} value={crypto.value}>
              {crypto.label}
            </option>
          ))}
        </select>
      </div>

      {/* To Section */}
      <div className="mb-4">
        <label className="block text-sm mb-2">To</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded"
        >
          {CRYPTO_OPTIONS.map((crypto) => (
            <option key={crypto.value} value={crypto.value}>
              {crypto.label}
            </option>
          ))}
        </select>
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-sm mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded font-bold"
        disabled={isLoading}
      >
        {isLoading ? "Converting..." : "Convert"}
      </button>

      {/* Result */}
      {convertedAmount && (
        <div className="mt-4 text-center">
          <p className="text-lg">
            Converted Amount:{" "}
            <span className="font-bold text-green-400">
              {convertedAmount} {toCurrency.toUpperCase()}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Convert;
