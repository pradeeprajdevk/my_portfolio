import { useState, useEffect } from 'react';

import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { fetchUserData } from "./services/userServices"; // Import the service
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header user={userData[0]}/>
      
      <Hero user={userData[0]} />
      <About />
      <Contact />
      
      <Footer user={userData[0]}/>
    </>
  )
}

export default App
