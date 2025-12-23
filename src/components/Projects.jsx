
import React from 'react';

const projectsData = [
  {
    title: "Ela-Creatives",
    description: "Designed and developed the website for Ela-Creatives.",
    link: "#"
  },
  {
    title: "Wakala Real Estate",
    description: "Designed and developed the website for Wakala Real Estate.",
    link: "#"
  },
  {
    title: "AnyDuka Commerce",
    description: "Managed the project lifecycle for AnyDuka Commerce.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:text-blue-300 font-semibold">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
