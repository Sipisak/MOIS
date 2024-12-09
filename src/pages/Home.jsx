
import React from "react";


function Home() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Cryptex</h1>
      <p className="text-lg text-gray-400 mb-4">
        Your trusted platform for secure crypto transactions.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-500">
        Get Started
      </button>
     
    </div>
  );
}

export default Home;
