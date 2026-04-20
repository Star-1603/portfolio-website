import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Decorations from './components/Decorations';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

useEffect(() => {
  const handleFirstInteraction = (e: Event) => {
    if (audioRef.current) {
      audioRef.current.volume = 0.12;
      audioRef.current.play().then(() => {
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('keydown', handleFirstInteraction);
      }).catch((err) => {
        console.warn('Autoplay blocked:', err);
      });
    }
  };

  window.addEventListener('click', handleFirstInteraction);
  window.addEventListener('keydown', handleFirstInteraction);

  return () => {
    window.removeEventListener('click', handleFirstInteraction);
    window.removeEventListener('keydown', handleFirstInteraction);
  };
}, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-200 relative overflow-hidden">

      {/* 🎧 Ambient Audio */}
      <audio ref={audioRef} loop preload='auto'>
        <source src="/lofiautumnleaves.mp3" type="audio/mp3" />
      </audio>

      <Decorations />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>

    </div>
  );
}

export default App;