
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Convert from "./pages/Convert";
import Market from "./pages/Market";
import Dashboard from "./pages/Dashboard";
import TradePage from "./pages/Trade";

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/convert" element={<Convert/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/market" element={<Market />} />
            <Route path="/dashboard" element={< Dashboard/>} />
            <Route path="/trade" element={<TradePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;

