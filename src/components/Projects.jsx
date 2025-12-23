
import React from 'react';

const projectsData = [
  {
    title: "Ela-Creatives",
    description: "A branding company website showcasing creative services and brand identity solutions.",
    link: "#"
  },
  {
    title: "Wakala Real Estate",
    description: "A comprehensive real estate platform facilitating land sales and property listings.",
    link: "#"
  },
  {
    title: "Wemisi",
    description: "An e-commerce store specialized in high-quality interior design products and decor.",
    link: "#"
  },
  {
    title: "Businessmatters",
    description: "A flip-book publication website dedicated to business insights, news, and resources.",
    link: "#"
  },
  {
    title: "Lostres Macarons",
    description: "A delightful e-commerce website for selling premium macarons with a custom ordering system.",
    link: "#"
  },
  {
    title: "Academic Portfolios",
    description: "Various portfolio websites designed for individuals in academia to highlight their research and achievements.",
    link: "#"
  },
  {
    title: "Darasa",
    description: "An innovative EdTech platform leveraging AI to personalized learning and further education.",
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
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-md">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
