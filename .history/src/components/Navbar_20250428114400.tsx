import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wrapper flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Heart className="h-6 w-6 text-primary-500" />
          <span className="text-xl font-handwritten font-semibold text-primary-600">Portfolio</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary-500 transition duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="container-wrapper py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 px-4 hover:bg-primary-50 rounded-lg">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-primary-50 rounded-lg">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-left py-2 px-4 hover:bg-primary-50 rounded-lg">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-4 hover:bg-primary-50 rounded-lg">Contact</button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;