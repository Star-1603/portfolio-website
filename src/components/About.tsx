import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Lightbulb, Heart, Coffee } from 'lucide-react';

const About: React.FC = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="about" className="relative py-24 bg-[#0b0b0d] overflow-hidden">
      
      {/* ambient haze */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(80,120,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="container-wrapper relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl text-white font-semibold tracking-tight"
          >
            About
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.6 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base"
          >
            somewhere between research, systems, and curiosity
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >

          {/* IMAGE */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/87/4e/5b/874e5b8399b8d0248cb596138bca4ef4.jpg"
                alt="portrait"
                className="w-full h-96 object-cover opacity-80 brightness-75 contrast-110"
              />

              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,119,198,0.2),transparent_70%)] mix-blend-screen" />
              <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl text-white font-medium mb-6">
              I build systems that learn, adapt, and scale
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a Computer Science student at SRM, working across machine learning,
              distributed systems, and high-performance computing. My work focuses on
              building intelligent systems that operate under real-world constraints —
              noisy data, scale, latency, and uncertainty.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              Recently, I’ve been exploring RAG-based architectures, privacy-preserving ML,
              and time-series anomaly detection — designing systems that don’t just respond,
              but anticipate.
              Also a forever Shinji Ikari apologist.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/5 text-gray-300">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm">Education</h4>
                  <p className="text-gray-500 text-xs">
                    B.Tech CSE — SRM IST (9.85 CGPA)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/5 text-gray-300">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm">Focus</h4>
                  <p className="text-gray-500 text-xs">
                    ML Systems, RAG, Distributed Infra
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/5 text-gray-300">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm">Interests</h4>
                  <p className="text-gray-500 text-xs">
                    storytelling, manhwa, anime(NGE Supremacist), quiet late-night builds
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/5 text-gray-300">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm">Off-screen</h4>
                  <p className="text-gray-500 text-xs">
                    reading, digital art, music loops on repeat
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;