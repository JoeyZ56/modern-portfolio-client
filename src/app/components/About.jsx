"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="text-3xl font-semibold py-20 text-center max-w-4xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-8"
      >
        Hi, I’m Joseph Zazzi, a full-stack MERN developer passionate about
        clean, responsive apps and a little AI magic.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-xl md:text-2xl mb-12"
      >
        Based in Magalia, CA, I’ve evolved from hands-on design to full-on dev
        wizardry.
      </motion.p>

      <div className="flex items-center gap-12 py-12">
        <motion.img
          src="/images/MERN-Stack.png"
          alt="MERN Stack"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-32 h-32 md:w-48 md:h-48 max-w-[12rem] max-h-[12rem] rounded-full object-cover mb-12 shadow-lg ring-4 ring-white transition-transform hover:scale-105 mx-auto"
        />
        <motion.img
          src="/images/AI-image.png"
          alt="AI Image"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-32 h-32 md:w-48 md:h-48 max-w-[12rem] max-h-[12rem] rounded-full object-cover mb-12 shadow-lg ring-4 ring-white transition-transform hover:scale-105 mx-auto"
        />
        <motion.img
          src="/images/AI-image.png"
          alt="AI Image"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-32 h-32 md:w-48 md:h-48 max-w-[12rem] max-h-[12rem] rounded-full object-cover mb-12 shadow-lg ring-4 ring-white transition-transform hover:scale-105 mx-auto"
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl md:text-2xl"
      >
        I specialize in JavaScript, React, and Node.js. I’ve worked with
        MongoDB, built RESTful APIs, and love crafting frontend experiences with
        Tailwind CSS. Lately, I’ve been building AI chatbots using Python +
        Ollama.
      </motion.p>
    </div>
  );
}
