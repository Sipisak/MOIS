
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConnectButtons from "../common/Connectbutton";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-gray-300 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          Cryptex
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <div className="relative">
            <button 
              onClick={toggleDropdown} 
              className="hover:text-yellow-500 focus:outline-none"
            >
              Markets
            </button>
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-gray-800 shadow-lg rounded-md p-4 w-40">
                <Link to="/convert" className="block px-4 py-2 text-sm hover:text-yellow-500">Convert</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:text-yellow-500">Spot Market</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:text-yellow-500">Futures Market</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:text-yellow-500">Margin Trading</Link>
              </div>
            )}
          </div>
          
        </div>

        {/* Action Buttons */}
        <div className="space-x-4">
          <Link to="/login" className="text-gray-300 border border-gray-500 px-4 py-1 rounded hover:bg-gray-700 hover:border-gray-400">
            Log In
          </Link>
          <Link to="/register" className="bg-yellow-500 text-gray-900 px-4 py-1 rounded hover:bg-yellow-400">
            Register
          </Link>
        </div>
        <ConnectButtons />
      </div>
    </nav>
  );
};

export default Navbar;
