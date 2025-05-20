import Sidebar from "./Sidebar";   
import { motion } from "framer-motion";

const slides = [
  { label: "Folding", src: "/src/assets/folding.png" },
  { label: "Wash & Dry", src: "/src/assets/wash.png" },
  { label: "Pressing", src: "/src/assets/pressing.png" },
  { label: "Dry Clean", src: "/src/assets/dry.png" },
];

const services = [
  { label: "FOLD", price: "₱500", src: "./fold.svg" },
  { label: "WASH & DRY", price: "₱700", src: "./wash-and-dry.svg" },
  { label: "PRESSING", price: "₱600", src: "./pressing.svg" },
  { label: "DRY CLEAN", price: "₱800", src: "./dry-clean.svg" },
];

export default function Home() {
  return (
    <>
      <Sidebar/>
      <main className="w-full h-screen flex justify-center items-center bg-[url('/src/assets/bg.home1.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-100 bg-white/20  backdrop-blur-xs"></div>
        <div className="relative z-10">
        <motion.div
  initial={{ 
    opacity: 0, 
    scale: 0.8,
    y: 20,
    rotate: 2,
  }}
  animate={{ 
    opacity: 1, 
    scale: 1,
    y: 0,
    rotate: 0,
    textShadow: "0 0 8px rgba(42, 136, 200, 0.3)",
  }}
  whileHover={{
    scale: 1.05,
    textShadow: "0 0 12px rgba(28, 60, 107, 0.5)",
    transition: { duration: 0.5 }
  }}
  transition={{ 
    type: "spring",
    damping: 10,
    stiffness: 100,
    delay: 0.1,
  }}
  className="text-[2.5rem] font-bold text-red-800 text-center my-15 font-[Poppins] uppercase"
>
  OUR PRICES
</motion.div>
          
          <div className="flex justify-evenly items-center gap-[2.5rem] flex-wrap">
            {services.map((service, index) => (
              <motion.button
                key={index}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[250px] h-[300px] bg-[#F2EFE7] border-[3px] border-[#735557] rounded flex justify-center items-center hover:scale-90 transition-transform duration-500 rounded-tl-xl"
              >
                <div className="flex flex-col items-center">
                  <motion.img
                    src={service.src}
                    alt={service.label}
                    className="w-[90px]"
                    whileHover={{ rotate: 10 }}
                  />
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-[1rem] mt-4 text-center font-semibold"
                  >
                    {service.label}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg font-bold"
                  >
                    {service.price}
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </main>

      <main className="w-full h-screen bg-[url('/src/assets/home.bg.jpg')] bg-cover bg-center flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-white/25 backdrop-blur-none"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: "0px 2px 8px rgba(0,0,0,0.2)"
            }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-[2.5rem] font-bold text-red-800 text-center my-8 font-[Poppins] uppercase "
          >
            OUR SERVICES
          </motion.h1>

          <div className="flex gap-10  justify-center px-4">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="flex flex-col items-center"
              >
                <motion.img
                  src={slide.src}
                  alt={slide.label}
                  className="w-[300px] h-[300px] mb-4 object-cover object-center rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div 
                  className="text-xl font-semibold text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {slide.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}