import { useState, useEffect, useRef } from 'react';

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

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSection, setCurrentSection] = useState('hero');

  // Create refs for each section
  const heroRef = useRef(null);   
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

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
    const setupObserver = () => {
      if (
          !heroRef.current ||
          !aboutRef.current ||
          !skillsRef.current ||
          !experienceRef.current ||
          !contactRef.current
      ) {
          // console.log("Refs still not available, delaying observer setup");
          requestAnimationFrame(setupObserver); // Try again on the next frame
          return;
      }

      // console.log("All refs available, setting up observer");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry)=> {
            // console.log("Intersection Entry:", entry);
            if(entry.isIntersecting) {
              setCurrentSection(entry.target.id);
            }
          });
        },
        { threshold: 0.5 } // Adjust as needed - when 50% of the section is visible
      );

      observer.observe(heroRef.current);
      observer.observe(aboutRef.current);
      observer.observe(skillsRef.current);
      observer.observe(experienceRef.current);
      observer.observe(contactRef.current);

      return () => observer.disconnect(); // Clean up the observer
    };

    requestAnimationFrame(setupObserver); // Initial call to setup observer
  }, []);

  useEffect(() => {
    // console.log("Current Section:", currentSection); // Add this line
    // Observer logic here
  }, [currentSection]); // Add currentSection as a dependency

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleUpArrowClick = () => {
    if (heroRef.current) {
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLandingPage = currentSection === 'hero';
  // console.log("Is Landing Page:", isLandingPage); // Add this line


  return (
    <>
      {/* <Header user={userData[0]}/>
      
      <Hero user={userData[0]} />
      <About />
      <Skills />
      <Experience />
      <Contact />
      
      <Footer user={userData[0]}/> */}

      <Header user={userData[0]} />

      <section id="hero" ref={heroRef}>
        <Hero user={userData[0]} />
      </section>
      
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      
      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>
        
      <section id="experience" ref={experienceRef}>
        <Experience />
      </section>

      <section id="contact" ref={contactRef}>
        <Contact />
      </section>

      {!isLandingPage && (
        <UpArrow onClick={handleUpArrowClick} />
      )}

      <Footer user={userData[0]} />
    </>
  )
}

export default App
