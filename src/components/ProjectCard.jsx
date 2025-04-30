"use client";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({
  title,
  image,
  description,
  techStack,
  repoUrl,
  liveUrl,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, rotate: 0.2 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 hover:shadow-2xl rounded-xl dark:border-zinc-700"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
      />

      <div className="flex flex-col flex-grow p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="flex-grow text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack?.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-700 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links section */}
        <div className="flex justify-between mt-6 text-sm font-semibold">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            🌐 Website
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:underline"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
