import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load Stripe
const stripePromise = loadStripe("pk_test_51QXKueC0GhvjXJXBD83IUrdJ4jAIP619ATEOXEJAWqi5kNxIFKbCe3pkEMNZdYjD7PzUhqVOKltu0FIM0rre1Wkd00j88sbNBh"); // Replace with your Stripe Test Public Key

// Payment Modal Component
const PaymentModal = ({ isOpen, onClose, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock PaymentIntent creation for test mode
      const res = await fetch("https://api.stripe.com/v1/payment_intents", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer sk_test_51QXKueC0GhvjXJXBVkUgEqKJT4HvPtUd12MzTE4LCg2aZla9TIgrPPlKncGXSQjc3hs3qjbnsktGUmu7iAYh9gsS00iVddvHCe`, // Replace with Stripe Test Secret Key
        },
        body: new URLSearchParams({
          amount: parseFloat(amount) * 100, // Convert to cents
          currency: "usd",
          payment_method_types: ["card"],
        }),
      });

      const { client_secret } = await res.json();

      const cardElement = elements.getElement(CardElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
        payment_method: { card: cardElement },
      });

      if (error) {
        alert(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === "succeeded") {
        onSuccess(parseFloat(amount));
        onClose();
      }
    } catch (err) {
      alert("Error processing payment.");
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4 text-white">Deposit Funds</h2>
        <form onSubmit={handlePayment} className="space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount ($)"
            className="p-2 bg-gray-700 rounded w-full text-white"
            required
          />
          <CardElement className="p-2 bg-gray-700 rounded text-white" />
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="bg-gray-600 px-4 py-2 rounded text-white">
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!stripe || loading}
            >
              {loading ? "Processing..." : "Deposit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDepositSuccess = (amount) => {
    setWalletBalance((prev) => prev + amount); // Update balance
    alert(`Successfully deposited $${amount}`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Elements stripe={stripePromise}>
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSuccess={handleDepositSuccess}
        />
      </Elements>

      {/* Dashboard Content */}
      <div className="px-6 py-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Balance Section */}
        <div className="col-span-1 bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Wallet Balance</h2>
          <p className="text-3xl font-bold">${walletBalance.toFixed(2)}</p>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-yellow-500 text-black px-4 py-2 rounded"
            >
              Deposit
            </button>
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
      </div>
    </div>
  );
};

export default Dashboard;
