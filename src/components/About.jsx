"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-4xl px-4 py-20 mx-auto text-3xl font-semibold text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 mb-8 text-5xl font-bold md:text-5xl sm:mt-0"
        >
          👋🏻 I’m Joseph Zazzi!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 text-3xl md:text-2xl"
        >
          A full-stack MERN developer passionate about clean, responsive apps.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 text-4xl font-bold md:text-3xl"
        >
          With a little AI magic😜
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-12 text-3xl md:text-2xl"
        >
          Based in Magalia, CA, I’ve evolved from hands-on design to full on dev
          wizardry.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8 py-12">
          <motion.img
            src="/images/Next.png"
            alt="Next"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-32 h-32 md:w-48 md:h-48 max-w-[12rem] max-h-[12rem] rounded-full object-cover mb-12 shadow-lg ring-4 ring-black dark:ring-white transition-transform hover:scale-105 mx-auto"
          />
          <motion.img
            src="/images/MERN-Stack.png"
            alt="MERN Stack"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-32 h-32 md:w-48 md:h-48 max-w-[12rem] max-h-[12rem] rounded-full object-cover mb-12 shadow-lg ring-4 ring-black dark:ring-white transition-transform hover:scale-105 mx-auto"
          />
          <motion.img
            src="/images/Python.png"
            alt="Python"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-32 h-32 md:w-48 md:h-48 max-w-[12rem] max-h-[12rem] rounded-full object-cover mb-12 shadow-lg ring-4 ring-black dark:ring-white transition-transform hover:scale-105 mx-auto"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl"
        >
          I specialize in JavaScript, React, and Node.js. I’ve worked with
          MongoDB, built RESTful APIs, and love crafting frontend experiences
          with Tailwind CSS. Lately, I’ve been building AI chatbots using Python
          + Ollama.
        </motion.p>
      </div>
    </section>
  );
}
