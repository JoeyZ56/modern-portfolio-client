"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const { loading, setLoading } = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/projects");
        const data = await res.json();

        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects from backend", error);
        setError(true);
      } finally {
        setLoading(true);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <BounceLoader color="#6366F1" size={60} />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project._id}
              className="p-4 bg-white shadow-md rounded-lg"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded mt-2"
              />
              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectCard;
