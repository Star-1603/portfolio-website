import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 text-gray-800">
              <span className="block text-primary-500 font-handwritten">Hello, I'm Alice</span>
              <span className="block mt-2">ML Enthusiast & Student</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Exploring the intersections of machine learning, creativity, and problem-solving.
              Building projects that matter and learning with every step.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="btn btn-primary flex items-center gap-2"
              >
                See my work <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Machine Learning Visualization" 
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-3xl"></div>
              
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary-200 rounded-full opacity-50"></div>
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-accent-200 rounded-full opacity-50"></div>
              <div className="absolute right-8 top-8 w-16 h-16 bg-primary-200 rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;