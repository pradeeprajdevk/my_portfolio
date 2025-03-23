import { useState, useEffect } from 'react';

import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer'

import { UpArrow } from './components/UpArrow/UpArrow';

function App() {
  const [isHeaderOrHeroVisible, setIsHeaderOrHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderOrHeroVisible(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleUpArrowClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Update the URL without reloading the page
    history.pushState(null, '', '#');
  };

  return (
    <>
      <Header />

      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
        
      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {!isHeaderOrHeroVisible && (
        <UpArrow onClick={handleUpArrowClick} />
      )}

      <Footer/>
    </>
  )
}

export default App
