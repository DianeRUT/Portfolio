import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/footer';
import './styles.css';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Button appears after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  return (
    <div className="App">
      <Header />
      <Contact />
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Footer />

      {/* Back to Top Button */}
      {showButton && (
        <button
          className="up-button show"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        ></button>
      )}
    </div>
  );
}

export default App;
