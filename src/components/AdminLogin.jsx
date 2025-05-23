import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/admin/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await response.json();
      navigate("/admin/home"); // Navigate instead of alert
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-screen min-h-screen flex items-center justify-center 
      bg-gray-100 dark:bg-gray-700 px-4"
      style={{
        backgroundImage: "url('/sign.bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative py-6 sm:max-w-sm sm:mx-auto w-full"
      >
        <form
          onSubmit={handleSubmit}
          className="px-8 py-6 bg-white dark:bg-gray-900 rounded-xl shadow-2xl"
        >
          <div className="flex flex-col items-center text-center">
            <motion.img
              src="/rinselogo.png"
              alt="Rinse Logo"
              className="w-16 h-16 mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Login to your Account
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400 max-w-[90%] mt-1">
              Get started with our app, just start session and enjoy experience.
            </span>
          </div>

          <div className="mt-6 w-full">
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
              placeholder="Username"
              required
            />
          </div>

          <div className="mt-4 w-full">
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-200"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center mt-4">{error}</p>
          )}

          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={loading}
            className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default AdminLogin;
