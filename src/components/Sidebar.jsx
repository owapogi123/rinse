import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed h-full w-64 bg-gray-800 text-white p-4">
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold"
              : "text-white hover:text-blue-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/sign"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold"
              : "text-white hover:text-blue-300"
          }
        >
          Sign In
        </NavLink>

        <NavLink
          to="/up"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold"
              : "text-white hover:text-blue-300"
          }
        >
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
}