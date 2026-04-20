import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { g } from 'framer-motion/client';

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
        staggerChildren: 0.25,
      },
    },
  };

  const projects = [
    {
  title: "INFER — RAG-based Network Intelligence System",
  description:
    "Distributed systems speak in fragments. INFER reconstructs intent — fusing FCAPS signals, vector search, and LLM reasoning into a single diagnostic flow. Built to handle scale, noise, and uncertainty without breaking coherence.",
  image: "https://i.pinimg.com/1200x/9e/6b/ce/9e6bce7108baad3c6c259e45de2306a3.jpg",
  tags: ["RAG", "Distributed Systems", "Milvus", "Redis", "LLMs"],
},
{
  title: "HeliXMatch — Parallel DNA Alignment",
  description:
    "Sequences stretch across memory and time. HeliXMatch rethinks alignment using dynamic MPI scheduling — balancing load, minimizing memory strain, and scaling across distributed nodes.",
  image: "https://i.pinimg.com/736x/3b/24/bf/3b24bfdcc396fa8caf1ec0fb4e150e88.jpg",
  tags: ["MPI", "HPC", "C++", "Parallel Computing"],
  githubLink: "https://github.com/Star-1603/DNA_Sequencing",
},
{
  title: "Privacy-Preserving Medical Redaction Pipeline",
  description:
    "Sensitive data leaves traces everywhere — text, layout, pixels. This system erases identity at multiple layers using ML, OCR control, and contextual reasoning. Built to protect what shouldn't be seen.",
  image: "https://i.pinimg.com/736x/83/00/93/8300936693223073ae89872baa3eab22.jpg",
  tags: ["ML", "OCR", "Privacy", "LLMs", "SVM"],
},
{
  title: "Resume Reviewer — Semantic ATS Engine",
  description:
    "Beyond keywords. This system reads between lines — matching resumes to roles using embeddings and LLM reasoning, surfacing gaps, alignment, and hidden signals in candidate profiles.",
  image: "https://i.pinimg.com/736x/8b/9f/26/8b9f2622d78bbb0821f215bce3cd6301.jpg",
  tags: ["Embeddings", "GenAI", "NLP", "ATS"],
  githubLink: "https://github.com/Star-1603/Resume_Reviewer",
},
{
  title: "Kafka-based Transaction Processing Service",
  description:
    "Streams of transactions, constantly in motion. Built a microservice that listens, validates, and persists financial events — ensuring consistency under continuous flow.",
  image: "https://i.pinimg.com/736x/4d/7a/93/4d7a930a54b8f101c187e1bc729203b0.jpg",
  tags: ["Kafka", "Spring Boot", "Microservices", "SQL"],
  githubLink: "https://github.com/Star-1603/kafka-transaction-service",
},
{
  title: "F1 Streaming Telemetry Dashboard",
  description:
    "Real-time insights into Formula 1 performance metrics. This dashboard visualizes telemetry data from race cars, providing drivers and teams with actionable intelligence during races.",
  image: "https://i.pinimg.com/1200x/c9/24/84/c92484324734dfef6ed5d7f72a4fd703.jpg",
  tags: ["HTML", "Python", "WebSocket", "Real-time Data"],
}
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 bg-[#0d0d0f]"
    >
      {/* Grain / haze overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(80,120,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="container-wrapper relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
          >
            Selected Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.6 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-gray-400 text-sm md:text-base"
          >
            systems, signals, and the spaces between them
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/Star-1603"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
          >
            <Github size={20} className="opacity-70 group-hover:opacity-100" />
            <span className="tracking-wide text-sm">
              more fragments on github
            </span>
            <ExternalLink size={16} className="opacity-60 group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;