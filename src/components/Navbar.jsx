"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="flex flex-col max-w-6xl gap-3 px-4 py-4 mx-auto sm:flex-row sm:justify-between sm:items-center">
        {/* Top row - Name */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <motion.a
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            href="#hero"
            className="text-2xl font-extrabold tracking-tight text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            Joseph Zazzi
          </motion.a>

          {/* Only show toggle next to name on mobile */}
          <div className="sm:hidden">
            <motion.button
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              onClick={() => setDark(!dark)}
              className="px-3 py-1 ml-4 transition rounded bg-zinc-200 dark:bg-zinc-800"
            >
              {dark ? "☀️" : "🌙"}
            </motion.button>
          </div>
        </div>

        {/* Middle row - Nav links */}
        <div className="flex justify-center gap-6 text-sm sm:text-base">
          <motion.a
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            href="#about"
            className="text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            About
          </motion.a>
          <motion.a
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            href="#projects"
            className="text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            Projects
          </motion.a>
          <motion.a
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            href="#contact"
            className="text-gray-700 transition-colors dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            Contact
          </motion.a>
        </div>
        {/* Desktop-only dark mode toggle */}
        <div className="hidden sm:block">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 text-indigo-800 transition-all duration-300 bg-indigo-100 rounded-lg dark:bg-indigo-700 dark:text-white hover:bg-white dark:hover:bg-indigo-500 "
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
