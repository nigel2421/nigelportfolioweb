import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: "Soil Merchants",
        role: "Digital Operations Associate",
        period: "June 2025 - Present",
        description: "Driving digital transformation and optimizing operational efficiency."
    },
    {
        company: "Darasa Impact Ltd",
        role: "Project Manager",
        period: "Jan 2020 - May 2025",
        description: "Led diverse projects from conception to delivery, ensuring alignment with strategic goals."
    },
    {
        company: "Book Bunk",
        role: "Data Handler",
        period: "Jan 2023 - Nov 2023",
        description: "Managed data integrity and analysis to support informed decision-making processes."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Experience</h2>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-gray-700"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Dot on the line */}
                            <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                            {/* Content Card */}
                            <div className={`w-full md:w-5/12 ml-6 md:ml-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'
                                }`}>
                                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                                    <div className={`flex items-center mb-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                        <Briefcase size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                                    </div>
                                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{exp.role}</h4>
                                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full mb-4">
                                        {exp.period}
                                    </span>
                                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                                </div>
                            </div>

                            {/* Empty space for the other side of the flex container */}
                            <div className="md:w-5/12"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
