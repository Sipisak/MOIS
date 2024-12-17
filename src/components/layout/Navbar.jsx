
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConnectButtons from "../common/Connectbutton";


const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-300 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Cryptex
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/market" className="block px-4 py-2 text-sm hover:text-yellow-500">Market</Link>
          <Link to="/convert" className="block px-4 py-2 text-sm hover:text-yellow-500">Convert</Link>
        </div>

        {/* Action Buttons */}
        <div className="space-x-4">
          <Link to="/login" className="text-gray-300 border border-gray-500 px-4 py-1 rounded hover:bg-gray-700 hover:border-gray-400">
            Log In
          </Link>
        </div>
        <ConnectButtons />
      </div>
    </nav>
  );
};

export default Navbar;
