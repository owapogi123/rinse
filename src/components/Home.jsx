import { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import ServicesModal from "../modals/ServicesModal";

const services = [
  { label: "FOLD", price: "P35 per Kilogram", src: "./fold.svg" },
  { label: "WASH & DRY", price: "P400 per Kilogram", src: "./wash-and-dry.svg" },
  { label: "PRESSING", price: "P90 per Kilogram", src: "./pressing.svg" },
];

export default function Home() {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/LandingPageNav"); 
  };

  return (
    <>
      <Sidebar />

      <main className="w-full h-screen flex justify-center items-center bg-[url('/src/assets/bg.home1.jpg')] bg-cover bg-center relative">
   
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs"></div>


        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          Logout
        </button>


        <div className="relative z-10">
          <h1 className="text-[2.5rem] font-bold text-red-800 text-center my-15 font-[Poppins] uppercase">
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
