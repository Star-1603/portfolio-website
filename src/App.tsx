import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Decorations from './components/Decorations';

function App() {
  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      <Decorations />
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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