
import React from 'react';
import Navbar from './components/Navbar';
import SectionWrapper from './components/SectionWrapper';

import Hero from './components/Hero';
import About from './components/About';

import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">
        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>

        <main className="container mx-auto px-4 space-y-16 pb-24">
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>



          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>

          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>

          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>

          <SectionWrapper id="education">
            <Education />
          </SectionWrapper>

          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
