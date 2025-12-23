
import React from 'react';

const skillsData = [
  { name: "ICT Competence", level: 85 },
  { name: "Planning & Organization", level: 76 },
  { name: "Interpersonal & Communication", level: 80 },
  { name: "Web Development", level: 90 },
  { name: "Project Management", level: 85 },
  { name: "SEO", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
