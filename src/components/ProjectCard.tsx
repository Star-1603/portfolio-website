import React from 'react';
import { motion } from 'framer-motion';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubLink?: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.12,
      },
    },
  };

  const handleClick = () => {
    if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      onClick={handleClick}
      className={`group relative rounded-2xl overflow-hidden border border-white/10 
      bg-white/5 backdrop-blur-xl transition-all duration-500 
      ${project.githubLink ? 'cursor-pointer' : ''}`}
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.25),transparent_70%)]" />

      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* TAGS */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 relative z-10">
        <h3 className="text-lg md:text-xl text-white font-medium mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* subtle hint */}
        {project.githubLink && (
          <p className="mt-4 text-xs text-gray-500 group-hover:text-gray-300 transition">
            view on github →
          </p>
        )}
      </div>

      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition duration-500" />
    </motion.div>
  );
};

export default ProjectCard;