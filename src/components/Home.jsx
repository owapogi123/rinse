import { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import ServicesModal from "../modals/ServicesModal";

const services = [
  { label: "FOLD", price: "P35 per Kilogram", src: "./fold.svg" },
  {
    label: "WASH & DRY",
    price: "P400 per Kilogram",
    src: "./wash-and-dry.svg",
  },
  { label: "PRESSING", price: "P90 per Kilogram", src: "./pressing.svg" },
];

export default function Home() {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.name, user.email);
  return (
    <>
      <Sidebar />

      <main className="w-full h-screen flex justify-center items-center bg-[url('/src/assets/bg.home1.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs"></div>

        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 z-20 flex items-center gap-2 px-6 py-2 rounded-full from-gray-500 to-gray-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300 group"
        >
          <span>Logout</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
        </button>

        <div className="relative z-10">
          <h1 className="text-[2.5rem] font-bold text-white text-center my-15 font-[Poppins] uppercase">
            OUR PRICES
          </h1>
          <div className="flex justify-evenly items-center gap-[2.5rem] flex-wrap">
            {services.map((service, index) => (
              <div key={index} onClick={() => setSelectedLabel(service.label)}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedLabel && (
        <ServicesModal
          label={selectedLabel}
          onClose={() => setSelectedLabel(null)}
        />
      )}
    </>
  );
}
