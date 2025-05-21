import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function CustomerProfile() {
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    homeAddress: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/signup/${user.id}`, // your backend URL
        {
  	method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            homeAddress: user.homeAddress,
            phoneNumber: user.phoneNumber,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const updatedUser = await response.json();

      // Update localStorage with new user info
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Profile updated successfully");
      setUser(updatedUser);
    } catch (err) {
      setError(err.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Sidebar />

      <h1>Customer Profile</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 p-4 bg-white rounded shadow">
        <label className="block mb-2">
          Name:
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </label>

        <label className="block mb-2">
          Email:
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </label>

        <label className="block mb-2">
          Home Address:
          <input
            name="homeAddress"
            value={user.homeAddress || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </label>

        <label className="block mb-2">
          Phone Number:
          <input
            name="phoneNumber"
            value={user.phoneNumber || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </label>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </>
  );
}
