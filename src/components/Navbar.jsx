"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="#hero"
          className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight hover:text-indigo-500 transition-colors"
        >
          Joseph Zazzi
        </Link>

        <div className="space-x-6 text-sm sm:text-base">
          <a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            Contact
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
