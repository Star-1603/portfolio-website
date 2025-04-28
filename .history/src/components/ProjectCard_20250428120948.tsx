import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink: string;
    githubLink: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      } 
    },
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="card group"
    >
      <div className="relative overflow-hidden h-48 sm:h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="bg-primary-500 bg-opacity-70 text-white text-xs py-1 px-2 rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="bg-gray-700 bg-opacity-70 text-white text-xs py-1 px-2 rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
       
      </div>
    </motion.div>
  );
};

export default ProjectCard;