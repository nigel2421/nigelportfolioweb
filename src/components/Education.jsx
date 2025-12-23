
import React from 'react';

const educationData = [
  {
    degree: "BSc in Hospitality & Tourism Management",
    institution: "Kenyatta University",
    year: "2022",
    details: "Second Class Honours (Upper Division)"
  },
  {
    program: "ALX Africa Software Engineering Program",
    institution: "Africa Leadership Academy",
    year: "2022 - 2023",
    details: "Gained skills & experiences to becoming a Full Stack Developer"
  },
  {
    certification: "K.C.S.E",
    institution: "Kamagut High",
    year: "2014",
    details: "Mean grade of C+ (Plus)"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree || edu.program || edu.certification}</h3>
                  <p className="text-blue-400">{edu.institution}</p>
                  <p className="text-gray-400 mt-1">{edu.details}</p>
                </div>
                <p className="text-gray-500 font-semibold">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
