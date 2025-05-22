import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Reservation() {
  const [user, setUser] = useState(null);
  const [service, setService] = useState("wash & dry");
  const [kilos, setKilos] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!user) {
      setMessage("You must be logged in to make a reservation.");
      return;
    }

    if (!kilos || isNaN(kilos) || Number(kilos) <= 0) {
      setMessage("Please enter a valid kilos number.");
      return;
    }

    const payload = {
      userId: user.id,
      service,
      kilos: Number(kilos),
    };

    console.log("Submitting reservation:", payload);

    try {
      const response = await fetch("http://localhost:3000/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to create reservation");

      setMessage("Reservation created successfully!");
      setKilos("");
      setService("wash & dry");
    } catch (err) {
      setMessage(err.message || "Error submitting reservation");
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex flex-col items-center justify-start flex-grow p-8 space-y-10">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
              Make a Reservation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-semibold mb-1">Service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="wash & dry">Wash & Dry (₱400/kilo)</option>
                  <option value="fold">Fold (₱35/kilo)</option>
                  <option value="press">Press (₱90/kilo)</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Kilos</label>
                <input
                  type="number"
                  value={kilos}
                  onChange={(e) => setKilos(e.target.value)}
                  className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="1"
                  required
                  placeholder="Enter kilos"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded shadow"
              >
                Make Reservation
              </button>
            </form>
            {message && (
              <p
                className={`mt-4 text-center font-medium ${
                  message.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>

        </main>
      </div>
    </>
  );
}
