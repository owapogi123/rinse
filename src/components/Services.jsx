import React from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate

function ServiceCard({ title, description, discount, icon }) {
  return (
    <div className="bg-gradient-to-tr from-[#e0f2f1] to-[#a7c4c9] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer relative overflow-hidden">
      <div className="w-16 h-16 bg-[#24444d] rounded-full flex items-center justify-center text-3xl text-white mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#24444d] mb-3 font-[Poppins] text-center">
        {title}
      </h3>
      <p className="text-[#1f2937] text-center mb-8 max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}

export default function Services() {
  const navigate = useNavigate(); // Step 2: Call useNavigate

  const services = [
    {
      title: "Laundry Service",
      description:
        "Wash & fold laundry with eco-friendly detergents and next-day delivery.",
      icon: "🧺",
    },
    {
      title: "Dry Cleaning",
      description:
        "Professional dry cleaning service for suits, dresses, and delicates.",
      icon: "🧥",
    },
    {
      title: "Pickup & Delivery",
      description:
        "We pick up and drop off your laundry at your doorstep, hassle-free.",
      icon: "🚚",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCEF] px-6 py-16 md:px-20 lg:px-32">
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#24444d] text-white rounded-full shadow-md hover:bg-[#1b333b] transition duration-300 font-[Poppins]"
      >
        <span className="text-xl cursor-pointer">Back</span>
      </button>

      <h1 className="text-5xl font-extrabold text-center text-[#24444d] mb-8 font-[Poppins]">
        Our Services
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg font-[Poppins]">
        At Rinse, we offer professional laundry solutions to simplify your life.
        Explore our range of services below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
