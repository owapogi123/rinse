import { motion } from "framer-motion";

export default function ServiceCard({ service, index }) {
  return (
    <motion.button
      key={index}
      type="button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-[250px] h-[300px] bg-[#F2EFE7] border-[3px] border-[#735557] rounded-tl-xl flex justify-center items-center hover:scale-90 transition-transform duration-500"
    >
      <div className="flex flex-col items-center">
        <motion.img
          src={service.src}
          alt={service.label}
          className="w-[90px]"
          whileHover={{ rotate: 10 }}
        />
        <div className="text-[1rem] mt-4 text-center font-semibold">
          {service.label}
        </div>
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
  );
}
