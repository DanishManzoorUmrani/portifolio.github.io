import React, { useEffect } from 'react';
import gsap from 'gsap';
import Header from './components/Header';
import Education from './components/Education';

import Projects from './components/Project';
import Contact from './components/Contact';
import './App.css'
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
function App() {
  useEffect(() => {
    gsap.from(".fade-in", { opacity: 1, duration: 1, y: 20, stagger: 0.3, });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certificates /> 
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
