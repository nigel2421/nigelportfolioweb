
import React from 'react';

const experienceData = [
    {
        role: "Web Developer",
        company: "Ela-Creatives",
        date: "July - 2024",
        description: "Designed and developed the website for Ela-Creatives."
    },
    {
        role: "Web Developer",
        company: "Wakala Real Estate",
        date: "June - 2024",
        description: "Designed and developed the website for Wakala Real Estate."
    },
    {
        role: "Project Manager",
        company: "AnyDuka Commerce Limited",
        date: "January - 2024",
        description: "Responsible for overseeing the entire project lifecycle, from planning and scope definition to execution, monitoring, and evaluation."
    },
    {
        role: "Archive Data Handler",
        company: "Book Bunk",
        date: "January - November 2023",
        description: "Managed Book Bunk's archival data, uploaded data to their website, and assisted with event logistics."
    },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="relative">
          <div className="border-l-2 border-blue-600 absolute h-full top-0 left-1/2 -translate-x-1/2"></div>
          {experienceData.map((item, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-5/12 bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold">{item.role}</h3>
                <p className="text-blue-400">{item.company}</p>
                <p className="text-gray-500 mb-2">{item.date}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
