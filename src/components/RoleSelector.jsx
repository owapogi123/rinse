import { useNavigate } from "react-router-dom";

export default function RoleSelector() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 py-10 "
      style={{ backgroundImage: "url('/role-bg.jpg')" }}
    >
      <h1 className="text-4xl font-bold text-white mb-12 animate-fadeSlideIn tracking-wide">
        Continue As
      </h1>

      <div className="flex flex-col sm:flex-row gap-10">
        <div
          onClick={() => navigate("/admin/login")}
          className="cursor-pointer bg-white/10 border border-white/30 backdrop-blur-xl shadow-xl rounded-2xl p-8 flex flex-col items-center w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fadeSlideIn delay-100"
        >
          <div className="text-5xl mb-4"></div>
          <h2 className="text-white font-semibold text-xl mb-2">Admin</h2>
          <p className="text-gray-200 text-sm text-center mb-4">
            Manage users, settings, and system controls.
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition-all px-6 py-2 rounded-lg text-white font-semibold text-sm">
            Go to Admin
          </button>
        </div>

        <div
          onClick={() => navigate("/landing")}
          className="cursor-pointer bg-white/10 border border-white/30 backdrop-blur-xl shadow-xl rounded-2xl p-8 flex flex-col items-center w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fadeSlideIn delay-300"
        >
          <div className="text-5xl mb-4"></div>
          <h2 className="text-white font-semibold text-xl mb-2">User</h2>
          <p className="text-gray-200 text-sm text-center mb-4">
            Start your Journey, Clean your Clothes
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 rounded-lg text-white font-semibold text-sm">
            Go to User
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeSlideIn {
            animation: fadeSlideIn 0.8s ease-out forwards;
          }

          .delay-100 {
            animation-delay: 0.1s;
          }

          .delay-300 {
            animation-delay: 0.3s;
          }
        `}
      </style>
    </div>
  );
}
