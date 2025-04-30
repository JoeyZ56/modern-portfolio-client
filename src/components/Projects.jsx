"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://modern-portfolio-backend.vercel.app/api/projects"
        );
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects from backend", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <BounceLoader color="#6366F1" size={60} />
      </div>
    );
  }

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center mb-6 text-5xl font-bold md:text-5xl"
      >
        My Projects
      </motion.h1>
      <motion.section
        className="grid gap-8 px-4 py-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </motion.section>
    </section>
  );
};

export default Projects;
