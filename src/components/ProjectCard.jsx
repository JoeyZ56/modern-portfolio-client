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
      className="bg-white dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 
             shadow-lg hover:shadow-2xl transition-all duration-300 
             rounded-xl overflow-hidden flex flex-col border 
             border-gray-100 dark:border-zinc-700 
             max-w-sm w-full mx-auto"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {techStack?.map((tech, i) => (
            <span
              key={i}
              className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

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
