import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projects = [
    {
      title: "FCAPS and Network Elements Correlation using LLMs",
      description: "A project that utilises LLMs for analysing Network Logs, prompts and suggesting the possible changes needed to optimise performance stats.",
      image: "https://i.pinimg.com/736x/f9/05/74/f905746c73fa5ec95b959b76e882e75a.jpg",
      tags: ["NLP", "Python", "BERT", "Software Management and Analytics", "Sentiment Analysis"],
    },
    {
      title: "Image Classification Web App",
      description: "A web application that uses deep learning to classify images uploaded by users into different categories.",
      image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Computer Vision", "React", "TensorFlow.js", "Keras"],
    },
    {
      title: "Recommendation System for Movies",
      description: "A collaborative filtering algorithm that recommends movies based on user preferences and viewing history.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Recommender Systems", "Python", "Collaborative Filtering"],

    },
    {
      title: "Predictive Analytics Dashboard",
      description: "A dashboard that visualizes data and provides predictive insights using machine learning algorithms.",
      image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Data Visualization", "Predictive Analytics", "React", "D3.js"],
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-cream to-white relative">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            My Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Exploring machine learning through practical applications and creative solutions
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/Star-1603" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <Github size={20} />
            <span className="font-medium">See more on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;