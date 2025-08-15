// ✅ Projects.jsx
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import projects from './projectsData'

const ProjectCard = ({ id, title, image, short, isDark }) => (
  <div
    className={`shadow-lg rounded-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 max-w-lg w-full
      ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
  >
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="w-full h-[200px] object-cover object-top rounded-t-2xl"
      onError={(e) => {
        e.target.onerror = null
        e.target.src = 'https://picsum.photos/400/300'
      }}
    />
    <div className="p-4 flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{short}</p>
      <a
        href={`/projects/${id}`}
        className={`inline-block text-sm font-medium px-4 py-2 rounded-md transition duration-300 
          ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
      >
        View Project
      </a>
    </div>
  </div>
)

const ProjectDetailsCard = ({ project, isDark }) => (
  <div className="max-w-4xl mx-auto p-6 rounded-2xl shadow-md bg-black text-white">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-64 object-cover rounded-md mb-6"
    />
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <p className="mb-4 text-gray-400">{project.full}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.stacks.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs rounded-full shadow-sm bg-black text-gray-200"
        >
          {tech}
        </span>
      ))}
    </div>

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 rounded-md mt-4 transition duration-300 shadow-md bg-white text-black hover:bg-gray-200"
    >
      🔗 Visit Live Site
    </a>

    <div className="mt-6">
      <Link
        to="/projects"
        className="inline-block px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition duration-300"
      >
        ← Back to Projects
      </Link>
    </div>
  </div>
)

const Projects = ({ isDark, setIsDark }) => {
  const location = useLocation()
  const projectId = location.pathname.startsWith('/projects/')
    ? location.pathname.split('/projects/')[1]
    : null
  const selectedProject = projects.find((p) => p.id === projectId)

  return (
    <div
      className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col min-h-screen`}
    >
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      <div className="flex-grow px-4 lg:px-6 mt-[80px] lg:mt-[80px] w-full overflow-auto">
        <div className="max-w-6xl mx-auto text-center">
          {selectedProject ? (
            // DETAILS PAGE
            <ProjectDetailsCard project={selectedProject} isDark={isDark} />
          ) : (
            // ALL PROJECTS GRID
            <>
              <h1 className="text-4xl font-bold mb-4">Projects</h1>
              <p
                className={`mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Some of my favorite and most impactful work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-20 justify-center">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`w-full ${index % 2 === 1 ? 'lg:mt-20' : ''}`}
                  >
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      image={project.image}
                      short={project.short}
                      isDark={isDark}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
