import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-between w-full px-6 py-2 text-sm text-gray-600 md:flex-row dark:text-gray-400">
        <p className="mb-2 font-bold text-black md:mb-0 dark:text-white">
          &copy; {new Date().getFullYear()} Joseph Zazzi
        </p>

        <div className="flex gap-4">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
