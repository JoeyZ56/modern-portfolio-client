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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <button
          onClick={handlePDFDownload}
          className="px-6 py-3 mt-6 font-semibold text-indigo-800 transition-all duration-300 bg-indigo-100 rounded-lg shadow-md  dark:bg-indigo-700 dark:text-white hover:bg-white hover:text-indigo-700"
        >
          Download My Resume
        </button>
      </motion.div>
    </div>
  );
};

export default ResumeDownload;
