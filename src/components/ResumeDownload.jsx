// import { useState } from "react";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";

const ResumeDownload = () => {
  const pdf = "/files/Joey-Zazzi-Resume.pdf";

  const handlePDFDownload = () => {
    // Fetch pdf file
    fetch(pdf)
      .then((res) => res.blob())
      .then((blob) => {
        saveAs(blob, "Joey-Zazzi-Resume.pdf");
      })
      .catch((err) => {
        console.log(err, "error downloading pdf");
      });
  };

  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <button
          onClick={handlePDFDownload}
          className=" font-semibold px-6 py-3 mt-6 rounded-lg shadow-md bg-indigo-100 dark:bg-indigo-700 
               text-indigo-800 dark:text-white 
               hover:bg-white hover:text-indigo-700  transition-all duration-300"
        >
          Download My Resume
        </button>
      </motion.div>
    </div>
  );
};

export default ResumeDownload;
