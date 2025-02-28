import { useState, useEffect } from 'react';

import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { fetchUserData } from "./services/userServices"; // Import the service
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/skills';
import { UpArrow } from './components/UpArrow/UpArrow';
import { Loader } from './components/Loader/Loader';
import { Projects } from './components/Projects/Projects';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHeaderOrHeroVisible, setIsHeaderOrHeroVisible] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderOrHeroVisible(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        <Hero user={userData[0]} />
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

      <Footer user={userData[0]} />
    </>
  )
}

export default App
