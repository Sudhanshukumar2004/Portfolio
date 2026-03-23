import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisibleProjects(2);
  };

  const openModal = (project) => {
    setVisibleProjects(2); // Reset visible projects if desired, or keep as is.
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="flex flex-col border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="w-full h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <div className="mb-6 flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openModal(project)}
                className="w-full bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-xl text-sm font-semibold text-center transition-colors duration-300"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Buttons */}
      {(visibleProjects < projects.length || visibleProjects > 2) && (
        <div className="flex justify-center mt-12">
          <div className="flex gap-4">
            {visibleProjects < projects.length && (
              <button
                onClick={handleShowMore}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-800 text-white rounded-xl text-lg font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Show More
              </button>
            )}

            {visibleProjects > 2 && (
              <button
                onClick={handleShowLess}
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl text-lg font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-purple-500 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6 border border-gray-700"
              />

              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-sm font-semibold text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl text-center font-bold transition-all border border-gray-600 hover:border-purple-500"
                >
                  View Code
                </a>
                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-center font-bold transition-all shadow-lg hover:shadow-purple-500/25"
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
