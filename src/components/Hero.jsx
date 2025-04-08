"use client";
import { motion } from "framer-motion";
import ResumeDownload from "./ResumeDownload";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden text-black dark:text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8 text-5xl font-bold md:text-7xl"
      >
        Joseph Zazzi
      </motion.h1>
      <motion.img
        src="/images/Good-Pic.jpg"
        alt="Joseph Zazzi"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-40 h-40 md:w-48 md:h-48 max-w-[12rem] max-h-[12rem] rounded-full object-cover mb-8 shadow-lg ring-4 ring-white transition-transform hover:scale-105"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-xl mb-8 text-xl text-center md:text-2xl"
      >
        JR. Full Stack MERN Developer with an AI Twist
      </motion.p>
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
        🢃
      </motion.div>

      <ResumeDownload />
    </section>
  );
}
