import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConnectButtons from "../common/Connectbutton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectionChange = (connectionState) => {
    setIsConnected(connectionState);
  };

  return (
    <nav className="bg-gray-900 text-gray-300 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Cryptex
        </Link>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-gray-300 hover:text-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8`}
        >
          <Link
            to="/"
            className="block px-4 py-2 hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/market"
            className="block px-4 py-2 hover:text-yellow-500 transition duration-300"
          >
            Market
          </Link>
          <Link
            to="/trade"
            className="block px-4 py-2 hover:text-yellow-500 transition duration-300"
          >
            Trade
          </Link>
          <Link
            to="/convert"
            className="block px-4 py-2 hover:text-yellow-500 transition duration-300"
          >
            Convert
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-300 border border-gray-500 px-4 py-1 rounded hover:bg-gray-700 hover:border-gray-400 transition duration-300"
          >
            Log In
          </Link>
          <ConnectButtons onConnectionChange={handleConnectionChange} />
          {isConnected && (
            <Link
              to="/dashboard"
              className="text-gray-300 border border-gray-500 px-4 py-1 rounded hover:bg-gray-700 hover:border-gray-400 transition duration-300"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
