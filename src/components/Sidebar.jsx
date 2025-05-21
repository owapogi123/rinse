import { NavLink } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const tabs = [
    { name: "Home", path: "/home" },
    { name: "Profile", path: "/profile" },
    { name: "Notifications", path: "/notifications" },
    { name: "Messages", path: "/messages" },
    { name: "Wallets", path: "/wallets" },
    { name: "Likes", path: "/likes" },
    { name: "Settings", path: "/settings" },
  ];

  useEffect(() => {
    if (isOpen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 },
      });
    } else {
      controls.start({
        x: -500,
        opacity: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 },
      });
    }
  }, [isOpen, controls]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white/80 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={controls}
            exit={{ x: -500, opacity: 0 }}
            className="fixed h-full w-64 bg-white/50 backdrop-blur-lg text-black p-4 rounded-r-xl shadow-3xl z-40"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-center mb-8"
            >
              <motion.h1
                className="text-2xl font-bold text-black"
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                Menu
              </motion.h1>
            </motion.div>

            <nav className="flex flex-col gap-2 mt-4">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.path}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 150,
                      damping: 12,
                    },
                  }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(130, 124, 141, 0.2)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    },
                  }}
                  whileTap={{
                    scale: 0.98,
                    backgroundColor: "rgba(128, 141, 124, 0.3)",
                  }}
                >
                  <NavLink
                    to={tab.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600/90 text-white font-bold shadow-lg"
                          : "text-black hover:text-blue-600"
                      }`
                    }
                  >
                    <motion.span
                      className="text-xl"
                      whileHover={{
                        scale: [1, 1.2, 1.1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        duration: 0.5,
                      }}
                    >
                      {tab.icon}
                    </motion.span>
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-black"
                    >
                      {tab.name}
                    </motion.span>
                    {index === 2 && (
                      <motion.span
                        className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: index * 0.05 + 0.3,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        3
                      </motion.span>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "100%",
                opacity: 1,
                transition: {
                  delay: tabs.length * 0.05 + 0.2,
                  duration: 0.8,
                  type: "spring",
                },
              }}
              className="h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent my-6"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: tabs.length * 0.05 + 0.5,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              whileHover={{
                backgroundColor: "rgba(42, 64, 104, 0.2)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer mt-auto mb-4"
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md"
                whileHover={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.7 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.span
                  className="text-xl"
                  animate={{
                    rotate: [0, 10, -5, 0],
                    transition: {
                      delay: tabs.length * 0.05 + 0.8,
                      duration: 0.8,
                    },
                  }}
                >
                  👋
                </motion.span>
              </motion.div>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: tabs.length * 0.05 + 0.7,
                    type: "spring",
                  },
                }}
              >
                <div className="font-xl font-semibold text-black">
                  Guest User
                </div>
                <motion.div
                  className="text-sm text-gray-700"
                  whileHover={{ x: 3 }}
                >
                  View Profile
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-6 right-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  delay: tabs.length * 0.05 + 1,
                  type: "spring",
                },
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  },
                }}
              >
                ➕
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
