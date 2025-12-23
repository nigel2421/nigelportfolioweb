
import React from 'react';

const About = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src="/Nigel.png"
              alt="Nigel Andahua"
              className="rounded-full w-64 h-64 object-cover mx-auto md:mx-0 shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
              I am a versatile professional with a background in Tourism Management and a strong career pivot into technology and digital operations. Over time, I have built expertise in web development, digital strategy, and operational management, blending creativity with technical precision to deliver impactful solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
              My journey reflects adaptability, problem-solving, and innovation—qualities that allow me to thrive in dynamic environments. With strong interpersonal skills, a passion for continuous learning, and proven experience across both hospitality and technology, I bring a unique perspective to every team I join. I am committed to leveraging my diverse expertise to drive organizational growth and create meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
