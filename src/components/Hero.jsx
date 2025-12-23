
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold">Nigel Andahua</h1>
        <p className="text-xl md:text-2xl text-gray-400">Web Developer & Project Manager</p>
        <p className="max-w-2xl mx-auto text-lg">A result-oriented individual with a passion for challenging work environments that foster personal and organizational growth.</p>
        <div className="space-x-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block">View My Work</a>
          <a href="#contact" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg inline-block">Contact Me</a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce">
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
