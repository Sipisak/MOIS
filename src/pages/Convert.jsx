import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = () => {
  const [cryptoOptions, setCryptoOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrencyModal, setShowCurrencyModal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Fetch available symbols from Binance API
  useEffect(() => {
    const fetchCryptoOptions = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/exchangeInfo"
        );
        const symbols = response.data.symbols
          .filter((pair) => pair.symbol.endsWith("USDT")) // Filter pairs ending with USDT
          .map((pair) => ({
            label: pair.baseAsset,
            value: pair.baseAsset,
            pair: pair.symbol,
          }));

        setCryptoOptions(symbols);
        setFilteredOptions(symbols);
        setFromCurrency(symbols[0]);
        setToCurrency(symbols[1]);
      } catch (error) {
        console.error("Failed to fetch Binance symbols", error);
      }
    };

    fetchCryptoOptions();
  }, []);

  // Filter options based on search term
  useEffect(() => {
    const filtered = cryptoOptions.filter((crypto) =>
      crypto.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, cryptoOptions]);

  // Fetch conversion rate
  const handlePreview = async () => {
    if (!amount || isNaN(amount) || !fromCurrency || !toCurrency) return;
    setIsLoading(true);
    try {
      const fromToSymbol = `${fromCurrency.value}USDT`;
      const toToSymbol = `${toCurrency.value}USDT`;

      // Fetch price of fromCurrency in USDT
      const fromResponse = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${fromToSymbol}`
      );

      // Fetch price of toCurrency in USDT
      const toResponse = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${toToSymbol}`
      );

      const fromPrice = parseFloat(fromResponse.data.price);
      const toPrice = parseFloat(toResponse.data.price);

      // Conversion logic
      const result = (amount * fromPrice) / toPrice;
      setConvertedAmount(result.toFixed(6));
      setRate((fromPrice / toPrice).toFixed(6));
      setShowConfirmation(true);
    } catch (error) {
      console.error("Failed to fetch conversion rate", error);
      alert("Failed to fetch conversion rate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg text-white shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Crypto Converter</h2>

      {/* From Section */}
      <div className="mb-4 bg-gray-700 p-4 rounded-lg">
        <div className="flex justify-between">
          <span className="text-sm">From</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={() => setShowCurrencyModal("from")}
            className="flex items-center space-x-2 text-lg"
          >
            <span>{fromCurrency?.label || "Select"}</span>
          </button>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-2/3 bg-gray-600 p-2 rounded text-right"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      {/* To Section */}
      <div className="mb-4 bg-gray-700 p-4 rounded-lg">
        <div className="flex justify-between">
          <span className="text-sm">To</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={() => setShowCurrencyModal("to")}
            className="flex items-center space-x-2 text-lg"
          >
            <span>{toCurrency?.label || "Select"}</span>
          </button>
          <div className="text-lg">{convertedAmount || "0.00"}</div>
        </div>
      </div>

      {/* Convert Button */}
      <button
        onClick={handlePreview}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded font-bold"
      >
        {isLoading ? "Loading..." : "Preview Conversion"}
      </button>

      {/* Currency Selection Modal */}
      {showCurrencyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 p-4 rounded-lg w-96">
            <h3 className="text-lg font-bold mb-4">Select Currency</h3>
            <input
              type="text"
              placeholder="Search currency"
              className="w-full p-2 mb-4 bg-gray-700 rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="h-64 overflow-y-auto">
              {filteredOptions.map((crypto) => (
                <button
                  key={crypto.value}
                  className="flex justify-between w-full p-2 hover:bg-gray-700 rounded"
                  onClick={() => {
                    if (showCurrencyModal === "from") setFromCurrency(crypto);
                    else setToCurrency(crypto);
                    setShowCurrencyModal(null);
                    setSearchTerm(""); // Clear search
                  }}
                >
                  <span>{crypto.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 p-4 rounded-lg w-96">
            <h3 className="text-lg font-bold mb-4 text-center">Confirm Conversion</h3>
            <p className="mb-2">From: {amount} {fromCurrency?.label}</p>
            <p className="mb-2">To: {convertedAmount} {toCurrency?.label}</p>
            <p className="mb-2">Rate: 1 {fromCurrency?.label} ≈ {rate} {toCurrency?.label}</p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded font-bold"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Convert;
