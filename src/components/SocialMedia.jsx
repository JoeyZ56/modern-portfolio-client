"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      {[
        {
          icon: <FaGithub size={24} />,
          href: "https://github.com/JoeyZ56",
        },
        {
          icon: <FaLinkedin size={24} />,
          href: "http://www.linkedin.com/in/joseph-zazzi-8bab68a1",
        },
      ].map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 text-indigo-800 transition-all duration-300 bg-indigo-100 rounded-full shadow-md dark:bg-indigo-700 dark:text-white hover:bg-white hover:text-indigo-700"
        >
          {social.icon}
        </motion.a>
      ))}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.fiverr.com/joey_zazzi"
        target="_blank"
        rel="noreferrer"
        className="p-3 text-indigo-800 transition-all duration-300 bg-indigo-100 rounded-full shadow-md dark:bg-indigo-700 dark:text-white hover:bg-white hover:text-indigo-700"
      >
        <img src="/images/fiverr-icon.svg" alt="Fiverr" className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default SocialMedia;
