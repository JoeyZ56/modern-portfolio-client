"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 overflow-hidden"
    >
      {/* Animated background with floating dots
      <div className="absolute inset-0 -z-10 bg-[length:200%_200%] animate-[gradient-shift_10s_ease-in-out_infinite] bg-gradient-to-r from-purple-600 via-pink-500 to-red-400">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white opacity-20 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div> */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Joseph Zazzi
      </motion.h1>
      <motion.img
        src="/images/school-pic.jpg"
        alt="Joseph Zazzi"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-32 h-32 md:w-48 md:h-48 max-w-[12rem] max-h-[12rem] rounded-full object-cover mb-8 shadow-lg ring-4 ring-white transition-transform hover:scale-105"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl mb-8 text-center max-w-xl"
      >
        Full‑stack MERN Developer with an AI Twist
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
      >
        Check Out My Projects
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="mt-10 text-3xl"
      >
        ⬇️
      </motion.div>
    </section>
  );
}
