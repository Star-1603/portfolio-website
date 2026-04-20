import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0a0a0c]"
    >
      {/* ambient gradients / haze */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(80,120,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="container-wrapper relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              <span className="block text-gray-400 text-lg md:text-5xl mb-3 tracking-wide">
                syeda umaiza unsa
              </span>

              <span className="block">
                systems. signals.
              </span>

              <span className="block text-gray-400">
                intelligence in between.
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
              I build machine learning systems that operate under noise, scale, and uncertainty —
              from privacy-preserving pipelines to RAG-based network intelligence and
              time-series anomaly prediction.
            </p>

            <p className="mt-4 text-gray-500 text-sm max-w-xl">
              CUDA • MPI • Distributed Systems • LLMs • Vector Search • Kafka
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span className="tracking-wide text-sm">
                  explore work
                </span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">

              <img
                src="https://i.pinimg.com/1200x/55/d2/e0/55d2e02af1623622462dd0abb5a36f37.jpg"
                alt="abstract system visualization"
                className="w-full h-full object-cover opacity-80 contrast-110 brightness-75"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* glow haze */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,119,198,0.2),transparent_70%)] mix-blend-screen" />

              {/* subtle border glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;