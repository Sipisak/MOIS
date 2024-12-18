
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      

      {/* Dashboard Content */}
      <div className="px-6 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Section */}
        <div className="col-span-1 bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Estimated Balance</h2>
          <p className="text-3xl font-bold">0.00026623 BTC</p>
          <p className="text-sm text-red-400">Today’s PnL: -$0.13 (-0.45%)</p>
          <div className="mt-4 flex justify-between">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded">Deposit</button>
            <button className="bg-gray-700 px-4 py-2 rounded">Withdraw</button>
          </div>
        </div>

        {/* Markets Section */}
        <div className="col-span-2 bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Markets</h2>
          <table className="w-full">
            <thead>
              <tr className="text-yellow-400">
                <th className="text-left">Coin</th>
                <th className="text-left">Amount</th>
                <th className="text-left">Price</th>
                <th className="text-left">24h Change</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td>EUR</td>
                <td>27.04</td>
                <td>$1.05</td>
                <td className="text-red-400">-0.69%</td>
              </tr>
              <tr>
                <td>USDC</td>
                <td>$50.00</td>
                <td>$1.00</td>
                <td className="text-green-400">+0.02%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Discover Section */}
        <div className="col-span-1 bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Discover</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>USDC</span>
              <span className="text-green-400">12.94%</span>
              <button className="text-yellow-500">Subscribe</button>
            </div>
            <div className="flex justify-between">
              <span>BNB</span>
              <span className="text-green-400">0.05%</span>
              <button className="text-yellow-500">Subscribe</button>
            </div>
            <div className="flex justify-between">
              <span>BTC</span>
              <span className="text-green-400">0.30%</span>
              <button className="text-yellow-500">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
