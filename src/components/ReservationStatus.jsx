import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
export default function ReservationStatus() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          setError("You must be logged in to view your reservations.");
          return;
        }

        const user = JSON.parse(storedUser);

        const response = await fetch("http://localhost:3000/reservations");
        if (!response.ok) throw new Error("Failed to fetch reservations");

        const data = await response.json();

        const userReservations = data.filter(
          (res) => res.user?.id === user.id
        );

        setReservations(userReservations);
      } catch (err) {
        setError(err.message || "Something went wrong while loading reservations.");
      }
    };

    fetchReservations();
  }, []);

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    completed: "bg-blue-100 text-blue-800",
  };

  return (
	  <div className="flex">
		<Sidebar/>
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center">My Reservations</h2>
      {error && <p className="text-red-600 text-center mb-6">{error}</p>}
      {reservations.length === 0 && !error && (
        <p className="text-gray-500 text-center">No reservations found.</p>
      )}
      <div className="space-y-6">
        {reservations.map((res) => (
          <div
            key={res.id}
            className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">{res.service.toUpperCase()}</h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[res.status] || "bg-gray-100 text-gray-700"}`}
              >
                {res.status.toUpperCase()}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-medium">Kilos</p>
                <p className="text-lg">{res.kilos}</p>
              </div>
              <div>
                <p className="font-medium">Price</p>
                <p className="text-lg font-bold text-green-700">
                  ₱{Number(res.price).toFixed(2)}
                </p>
              </div>
              <div>
                <p className="font-medium">Date</p>
                <p>{new Date(res.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
  );
}
