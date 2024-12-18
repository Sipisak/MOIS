import React from "react";
import { Link } from "react-router-dom";
import TopPerformarnce from "../components/market/TopPerformance";

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* CTA Section */}
      <section className="p-8 lg:p-24 flex items-center justify-between">
        <div className="max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Buy & Sell Digital Assets In The Cryptex
          </h2>
          <p className="text-gray-400 mt-4">
            Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto assets.
          </p>
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 mt-6 rounded-lg">
              Get started now
            </button>
          </Link>
        </div>
        <div>
          <img src="/hero-banner.png" alt="Mockup" />
        </div>
      </section>

      <TopPerformarnce />

      {/* Steps Section */}
      <section className="p-8 lg:p-24 bg-gray-900">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-6xl mb-4">⛅</div>
            <h4 className="text-2xl font-bold">Download</h4>
            <p className="text-gray-400 mt-2">Get started by downloading the app.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-6xl mb-4">👛</div>
            <h4 className="text-2xl font-bold">Connect Wallet</h4>
            <p className="text-gray-400 mt-2">Connect your secure wallet.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-6xl mb-4">⛏️</div>
            <h4 className="text-2xl font-bold">Start Trading</h4>
            <p className="text-gray-400 mt-2">Begin trading cryptocurrency.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-6xl mb-4">💰</div>
            <h4 className="text-2xl font-bold">Earn Money</h4>
            <p className="text-gray-400 mt-2">Grow your wealth efficiently.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p-8 lg:p-24 space-y-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">What Is Cryptex</h2>
        <div className="flex items-center space-x-4">
          <div className="text-blue-600 text-4xl">🔹</div>
          <div>
            <h3 className="text-xl font-bold">View real-time cryptocurrency prices</h3>
            <p className="text-gray-400">
              Experience a variety of trading on Bitcost with options like Spot Trade, Futures Trade, P2P, and more.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-blue-600 text-4xl">🔹</div>
          <div>
            <h3 className="text-xl font-bold">Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
            <p className="text-gray-400">
              Trade various cryptocurrencies safely and efficiently.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/market">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between p-8 lg:p-24">
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Free Your Money & Invest With Confident
          </h1>
          <p className="text-gray-400">
            With Cryptor Trade, you can be sure your trading skills are matched.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xl flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Buy, Sell, And Trade On The Go
              </h3>
              <p className="text-gray-400">Manage Your Holdings From Your Mobile Device</p>
            </div>
            <div>
              <h3 className="font-bold text-xl flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Take Control Of Your Wealth
              </h3>
              <p className="text-gray-400">
                Rest Assured You (And Only You) Have Access To Your Funds
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <img src="/googleplay.png" alt="Google Play" />
            <img src="/appstore.png" alt="App Store" />
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img
              src="/app-banner.png"
              alt="App Banner"
              className="w-80 h-[500px] rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
