import React, { useState, useEffect, useMemo } from "react";
import SidebarAdmin from "./SidebarAdmin";

export default function ReserveQueue() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Filter states
  const [filterName, setFilterName] = useState("");
  const [filterEmail, setFilterEmail] = useState("");
  const [filterService, setFilterService] = useState("");
  const [filterKilos, setFilterKilos] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:3000/reservations");
      if (!res.ok) throw new Error("Failed to fetch reservations");
      const data = await res.json();
      setReservations(data);
    } catch (err) {
      setMessage(err.message || "Error loading reservations");
    }
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    setMessage("");
    try {
      const res = await fetch(`http://localhost:3000/reservations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error(`Failed to ${status} reservation`);
      setMessage(`Reservation ${status} successfully.`);
      fetchReservations();
    } catch (err) {
      setMessage(err.message || "Error updating reservation");
    }
  };

  const deleteReservation = async (id) => {
    setMessage("");
    try {
      const res = await fetch(`http://localhost:3000/reservations/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete reservation");
      setMessage("Reservation deleted successfully.");
      fetchReservations();
    } catch (err) {
      setMessage(err.message || "Error deleting reservation");
    }
  };

  // Filtered reservations based on all filters
  const filteredReservations = useMemo(() => {
    return reservations.filter((r) => {
      // Filter by name
      const matchesName = r.user?.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
      // Filter by email
      const matchesEmail = r.user?.email
        .toLowerCase()
        .includes(filterEmail.toLowerCase());
      // Filter by service
      const matchesService = r.service
        .toLowerCase()
        .includes(filterService.toLowerCase());
      // Filter by kilos (number comparison or partial match)
      const matchesKilos =
        filterKilos === "" ||
        r.kilos.toString().includes(filterKilos);
      // Filter by price (number comparison or partial match)
      const priceString = r.price != null ? Number(r.price).toFixed(2) : "0.00";
      const matchesPrice =
        filterPrice === "" || priceString.includes(filterPrice);
      // Filter by status
      const matchesStatus = r.status
        .toLowerCase()
        .includes(filterStatus.toLowerCase());

      return (
        matchesName &&
        matchesEmail &&
        matchesService &&
        matchesKilos &&
        matchesPrice &&
        matchesStatus
      );
    });
  }, [
    reservations,
    filterName,
    filterEmail,
    filterService,
    filterKilos,
    filterPrice,
    filterStatus,
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarAdmin />
      <div className="p-6 w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">Admin Reservation Queue</h1>

        {message && (
          <p
            className={`mb-4 font-semibold ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Filters */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <input
            type="text"
            placeholder="Filter by Name"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Filter by Email"
            value={filterEmail}
            onChange={(e) => setFilterEmail(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Filter by Service"
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Filter by Kilos"
            value={filterKilos}
            onChange={(e) => setFilterKilos(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Filter by Price"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Filter by Status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        {loading ? (
          <p>Loading reservations...</p>
        ) : (
          <table className="w-full border-collapse bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3 text-left">User</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Phone Number</th>
                <th className="border p-3 text-left">Service</th>
                <th className="border p-3 text-right">Kilos</th>
                <th className="border p-3 text-right">Price</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-4 text-center text-gray-500">
                    No reservations found.
                  </td>
                </tr>
              ) : (
                filteredReservations.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="border p-3">{r.user?.name || "Unknown"}</td>
                    <td className="border p-3">{r.user?.email || "N/A"}</td>
                    <td className="border p-3">{r.user?.phoneNumber || "N/A"}</td>
                    <td className="border p-3">{r.service}</td>
                    <td className="border p-3 text-right">{r.kilos}</td>
                    <td className="border p-3 text-right">
                      ${r.price != null ? Number(r.price).toFixed(2) : "0.00"}
                    </td>
                    <td className="border p-3">{r.status}</td>
                    <td className="border p-3 text-center space-x-2">
                      {r.status === "pending" && (
                        <>
                          <button
                            onClick={() => updateStatus(r.id, "approved")}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateStatus(r.id, "rejected")}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => deleteReservation(r.id)}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
                          >
                            Delete
                          </button>
                        </>
                      )}
                      {(r.status === "approved" || r.status === "rejected") && (
                        <button
                          onClick={() => deleteReservation(r.id)}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
