import React from "react";
import { useNavigate } from "react-router-dom";

function PromoCard({ title, description, discount, icon }) {
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
      <div className="absolute top-4 right-[-40px] rotate-45 bg-[#e63946] text-white font-bold px-6 py-1 text-sm shadow-lg">
        {discount}
      </div>
    </div>
  );
}

export default function Promos() {
  const navigate = useNavigate();

  const promos = [
    {
      title: "Spring Cleaning Special",
      description: "Get your laundry done with 20% off this spring season.",
      discount: "20% OFF",
      icon: "🌸",
    },
    {
      title: "First-Time Customer",
      description: "Welcome! Enjoy a 15% discount on your first order.",
      discount: "15% OFF",
      icon: "🎉",
    },
    {
      title: "Refer a Friend",
      description:
        "Refer a friend and both get $10 off your next laundry service.",
      discount: "$10 OFF",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCEF] px-6 py-16 md:px-20 lg:px-32">
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#24444d] text-white rounded-full shadow-md hover:bg-[#1b333b] transition duration-300 font-[Poppins]"
      >
        <span className="text-xl">Back</span>
      </button>

      <h1 className="text-5xl font-extrabold text-center text-[#24444d] mb-12 font-[Poppins]">
        Current Promotions
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg font-[Poppins]">
        Take advantage of our latest deals and save on your laundry services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {promos.map((promo) => (
          <PromoCard
            key={promo.title}
            title={promo.title}
            description={promo.description}
            discount={promo.discount}
            icon={promo.icon}
          />
        ))}
      </div>
    </div>
  );
}
