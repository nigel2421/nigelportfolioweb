import React from 'react';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: "Python", level: 85 },
  { name: "Laravel", level: 78 },
  { name: "HTML & CSS", level: 95 },
  { name: "React", level: 88 },
  { name: "AI Integration", level: 82 },
  { name: "Web Development", level: 92 },
  { name: "SEO", level: 75 },
];

const peopleSkills = [
  { name: "Project Management", level: 85 },
  { name: "Planning & Organization", level: 88 },
  { name: "Interpersonal & Communication", level: 90 },
  { name: "Leadership", level: 82 },
  { name: "Problem Solving", level: 86 },
  { name: "Adaptability", level: 94 }
];

const SkillBar = ({ skill }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
      <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
      <motion.div
        className="bg-blue-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-blue-600 pl-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-green-600 pl-4">People Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {peopleSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
