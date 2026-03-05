import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl w-full mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        {/* Outer Container */}
        <div className="bg-light p-10 rounded-2xl border border-gray-300 shadow-md">

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-lightest p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <h3 className="text-2xl font-semibold mb-4">
                  {project.name}
                </h3>

                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium hover:underline"
                >
                  View Project →
                </a>

              </motion.div>
            ))}

          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/dhanarajrk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200"
            >
              <span>View More Projects</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>

            </a>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Projects;