import { Link, useNavigate } from "react-router-dom";

export default function SidebarAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // or your login page route
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/admin/machine" className="hover:bg-gray-700 p-2 rounded">
          🛠️ Machine
        </Link>
        <Link to="/admin/reserve-queue" className="hover:bg-gray-700 p-2 rounded">
          📋 Reserve Queue
        </Link>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
      >
        🚪 Logout
      </button>
    </div>
  );
}
