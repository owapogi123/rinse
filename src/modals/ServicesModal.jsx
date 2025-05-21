import { useState } from "react";
import { motion } from "framer-motion";

export default function ServicesModal({ label, onClose }) {
  const [kilos, setKilos] = useState(1);

  const serviceRates = {
    FOLD: 35,
    "WASH & DRY": 400,
    PRESSING: 90,
  };

  const pricePerKilo = serviceRates[label] || 0;
  const totalPrice = kilos * pricePerKilo;

  const handleCheckout = () => {
    alert(`Checkout successful for ${kilos}kg - Total: ₱${totalPrice}`);
  };

  const renderContent = () => {
    switch (label) {
      case "FOLD":
        return (
          <>
            <p className="text-gray-700 mb-4">
              We neatly fold your clothes at ₱35/kg. Ideal for daily laundry
              that needs quick, organized packing.
            </p>
            <InputAndCheckout />
          </>
        );

      case "WASH & DRY":
        return (
          <>
            <p className="text-gray-700 mb-4">
              We wash and dry your clothes using premium detergents and gentle
              cycles. Price: ₱400/kg.
            </p>
            <InputAndCheckout />
          </>
        );

      case "PRESSING":
        return (
          <>
            <p className="text-gray-700 mb-4">
              Professional pressing services to make your clothes crisp and
              wrinkle-free at ₱90/kg.
            </p>
            <InputAndCheckout />
          </>
        );

      default:
        return (
          <p className="text-gray-700 mb-4">Service details not available.</p>
        );
    }
  };

  const InputAndCheckout = () => (
    <>
      {/* Kilogram Input */}
      <div className="flex flex-col items-center mt-4">
        <label className="text-sm mb-1">Enter Kilograms:</label>
        <input
          type="number"
          min={1}
          value={kilos}
          onChange={(e) => setKilos(parseInt(e.target.value) || 1)}
          className="border border-gray-300 rounded px-3 py-1 w-24 text-center"
        />
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="mt-6 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Checkout — ₱{totalPrice}
      </button>
    </>
  );

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="relative bg-white p-6 pt-12 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Back Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-sm text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
        >
          ← Back
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">{label}</h2>

        {/* Dynamic Content */}
        <div className="text-center">{renderContent()}</div>
      </motion.div>
    </div>
  );
}
