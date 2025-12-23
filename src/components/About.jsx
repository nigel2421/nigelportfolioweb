
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://via.placeholder.com/300"
              alt="Nigel Andahua" 
              className="rounded-full mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-400 leading-relaxed">
              As a Tourism Management graduate with a proven track record of success, I am a result-oriented individual with a passion for challenging work environments that foster personal and organizational growth. My self-motivation, ambition, and innovative approach to learning, combined with my strong interpersonal skills, make me a valuable asset to any team. I am committed to utilizing my acquired skills and academic knowledge to contribute to the success of any organization I join.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
