import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Hospitality & Tourism Major",
  "Web Developer",
  "Project Manager",
  "Digital Marketer",
  "Content Creator",
  "Tech Guru",
  "Prompt Engineer",
  "Social Media Strategist",
  "Jack of Most Trades in Tech",
  "Web Designer",
  "Front-End Developer",
  "Paid Advertising Specialist",
  "Brand Strategist",
  "Marketing Coordinator"
];

const greetings = [
  "Hello, my name is",
  "Sasa jina yangu ni",
  "Hamjambo jina yangu ni",
  "Hola, me llamo",
  "Bonjour, je m'appelle",
  "Hallo, mein Name ist",
  "Ciao, mi chiamo",
  "Olá, meu nome é",
  "Привет, меня зовут",
  "你好，我的名字是",
  "こんにちは、私の名前は",
  "안녕하세요, 제 이름은",
  "नमस्ते, मेरा नाम है",
  "مرحبا، اسمي",
  "Γεια, το όνομά μου είναι",
  "Cześć, mam na imię",
  "שלום, שמי"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    const greetingTimer = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);

    return () => {
      clearInterval(roleTimer);
      clearInterval(greetingTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 py-20">
      <div className="space-y-6 flex-grow flex flex-col justify-center">

        {/* Greetings Slider */}
        <div className="h-8 md:h-10 flex items-center justify-center overflow-hidden mb-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={greetingIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium"
            >
              {greetings[greetingIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold">Nigel Andahua</h1>

        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mt-2">I am skilled in</p>

        {/* Roles Slider */}
        <div className="h-12 md:h-16 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">A result-oriented individual with a passion for challenging work environments that foster personal and organizational growth.</p>
        <div className="space-x-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block shadow-lg transition-transform hover:scale-105">View My Work</a>
          <a href="#contact" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-3 px-6 rounded-lg inline-block shadow-lg transition-transform hover:scale-105">Contact Me</a>
        </div>
      </div>

      <div className="mt-12 animate-bounce">
        <a href="#about" aria-label="Scroll to About Section">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
