'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaPalette, FaMagic, FaRobot } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Portfolio() {
const [showNav, setShowNav] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowNav(true);  // Show navbar when scrolling past 50px
    } else {
      setShowNav(false); // Hide navbar when at the top
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    const starButton = document.getElementById('star') as HTMLButtonElement;
    const gameArea = document.getElementById('game-area');

    const spawnStar = () => {
      if (starButton && gameArea) {
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);
        starButton.style.left = `${x}px`;
        starButton.style.top = `${y}px`;
        starButton.classList.remove('hidden');
      }
    };

    const handleStarClick = () => {
      if (starButton) {
        starButton.classList.add('hidden');
        spawnStar();
      }
    };

    starButton?.addEventListener('click', handleStarClick);
    const intervalId = setInterval(spawnStar, 1000);

    return () => {
      clearInterval(intervalId);
      starButton?.removeEventListener('click', handleStarClick);
    };
  }, []);

  return (
    <motion.main 
      className="bg-gradient-to-b from-blue-200 to-purple-300 text-gray-900 min-h-screen font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/ec/37/9b/ec379bbc267df9f718dfbc415ceff8e7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}  
    >
<motion.nav 
  className="flex justify-between items-center p-5 bg-pink-300/50 shadow-lg rounded-b-lg fixed w-full top-0 z-10"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : -20 }}
  transition={{ duration: 0.5 }}
>
  <h1 className="text-2xl font-bold text-pink-800 flex items-center">
    ✨ Syeda Umaiza Unsa <FaHeart className="ml-2 text-red-500" /> ✨
  </h1>
  <ul className="hidden md:flex space-x-6 text-pink-800">
    {["About", "Projects", "Gallery", "Contact"].map((item, index) => (
      <motion.li 
        key={index} 
        className="hover:text-pink-600 cursor-pointer flex items-center"
        whileHover={{ scale: 1.1 }}
      >
        {item === "Gallery" ? <FaPalette className="mr-1" /> : null}
        <a href={`#${item.toLowerCase()}`} className="scroll-smooth">{item}</a>
      </motion.li>
    ))}
  </ul>
</motion.nav>

<motion.section
      id="about"
      className="p-12 text-center rounded-2xl shadow-xl border-4 border-purple-500 m-8 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/06/62/01/0662017ad823fa5007686f49b02a5df7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-extrabold text-purple-900 flex justify-center items-center gap-2">
        💖 About Me <FaStar className="text-yellow-400 animate-pulse" />
      </h2>
      
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 gap-6 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
          {[ 
            "https://i.pinimg.com/736x/bf/91/f0/bf91f083f6d50be1b5259e2335fc265f.jpg", 
            "https://i.pinimg.com/736x/ca/17/a2/ca17a2b8c7d31b91a9ac82ff499e9a21.jpg",
            "https://i.pinimg.com/736x/a8/cf/4a/a8cf4a325d501413fa06880ace9a221c.jpg",
            "https://i.pinimg.com/736x/da/df/04/dadf04b148a621bd58d076813f18cd56.jpg"
          ].map((src, index) => (
            <motion.img 
              key={index}
              src={src} 
              alt="Cutesy Retro Dynamic Illustration" 
              className="w-44 h-44 md:w-52 md:h-52 rounded-lg shadow-xl border-2 border-purple-300"
              initial={{ rotate: index % 2 === 0 ? -5 : 5 }}
              whileHover={{ rotate: index % 2 === 0 ? 5 : -5, scale: 1.15 }}
            />
          ))}
        </div>
        
        <p className="max-w-lg text-purple-950 mt-8 md:mt-0 md:ml-8 text-lg leading-relaxed font-medium bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
          Hi, I'm <span className="text-purple-700 font-bold">Umaiza!</span> ✨ A passionate <FaMagic className="inline text-pink-500" /> ML and Generative AI enthusiast <FaRobot className="inline text-blue-500" /> who loves building fun and innovative projects. 
          Whether it's developing AI-powered chatbots or researching network correlation, I thrive on solving complex problems with creative solutions! 💡🚀
        </p>
      </motion.div>
    </motion.section>


      <motion.section  className="p-10 text-center rounded-xl shadow-lg border-4 border-purple-400 m-6"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/38/54/24/3854243b9761cf34b1b066a25db1ed3a.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-3xl font-bold text-purple-900">💼 Experience </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[{
            role: "Student Researcher",
            org: "Samsung PRISM Program",
            time: "Nov 2024 - Present",
            desc: "Working on FCAPS and network element correlation using LLMs."
          },
          {
            role: "Member",
            org: "Visual Computing Research Community (VCRC)",
            time: "Oct 2024 - Present",
            desc: "Collaborating on research projects in visual computing and machine learning."
          },
        {
          role: "Member",
          org: "Liftoff Student Club",
          time: "Apr 2024 - Present",
          desc: "Created and Deployed SaaS products."
        }].map((exp, index) => (
            <motion.div key={index} className="p-5 bg-purple-200/80 rounded-lg shadow-lg"  whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-purple-800">{exp.role} @ {exp.org}</h3>
              <p className="text-purple-600 text-sm">{exp.time}</p>
              <p className="mt-2 text-purple-700">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects"  className="p-10 text-center rounded-xl shadow-lg border-4 border-purple-200 m-6"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/89/42/08/89420819fb9c0959d1354329aa158739.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-3xl font-bold text-purple-800">💡Projects </h2>
        <p className="text-2xl text-purple-900">   Find them on my Github below 😉</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[{ name: "ASL Interpreter", description: `
Built a Python and OpenCV-powered interpreter for American Sign 
Language (ASL). Outcome: Successfully deployed but pending enhancements in 
web development. ` },
              {name: "Uplift", description: "A mental health chatbot and inmdfulness assistant."},
            { name: "Library Management System", description: "A computer vision-powered book tracking system. Uses ISBN numbers on books to track them." }].map((project, index) => (
            <motion.div key={index} className="p-5 bg-purple-200/100 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-purple-800">{project.name}</h3>
              <p className="text-purple-600 mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section  className="p-10 text-center rounded-xl shadow-lg border-4 border-purple-400 m-6"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/e8/17/81/e81781623c2c1c632db6a57a5e9e28e5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-3xl font-bold text-purple-900 list-disc pl-7">🏆 Achievements </h2>
        <ul className="text-purple-700 list-disc pl-5">
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[{name: "Winner: TechKnow 2023 Challenge"},
          {name: "Selected for Smart India Hackathon (College Round)"},
          {name: "Honourable Mention: SRM Model UN (World Economic Forum Delegate)"},
          {name: "Special Mention: Ultron 8.0, A Hackathon held by Futurix Association under CTech Department."}].map((Achievements, index) => (
          <motion.div key={index} className="p-5 bg-purple-200/50 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <h3 className="text-l font-semibold text-purple-800">{Achievements.name}</h3>
            </motion.div>
  ))}</div>
        </ul>
        
      </motion.section>

      <motion.section className="p-10 text-center rounded-xl shadow-lg border-4 border-purple-400 m-6"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/69/a6/b6/69a6b6c971b80d03662674282e422a37.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h2 className="text-3xl font-bold text-purple-900">📜 Skills </h2>
        <div className="text-purple-700 grid grid-cols-2 gap-4 max-w-xl mx-auto">
          {[
            { name: "Machine Learning", level: 90 },
            { name: "API Development", level: 85 },
            { name: "Deep Learning", level: 80 },
            { name: "AWS", level: 75 },
            { name: "GitHub", level: 85 },
            { name: "Gen AI (LLMs and Fine Tuning)", level: 70 },
            { name: "Full Stack Development (Javascript)", level: 60 },
            { name: "Python", level: 90 },
            { name: "Data Structures", level: 85 },
            { name: "Project Management", level: 70 }
          ].map((skill, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm">{skill.name}</p>
                <p className="text-sm text-purple-800 font-semibold">{skill.level}%</p>
              </div>
              <div className="w-40 bg-purple-200 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="bg-purple-600 h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

  <motion.section 
  id="gallery" 
  className="p-10 text-center relative bg-white/20 rounded-xl shadow-lg border-4 border-purple-400 m-6"
  style={{ backgroundImage: "url('https://i.pinimg.com/originals/0f/c7/67/0fc767553359ab90835e5023261f5f09.gif')", backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <h2 className="text-3xl font-bold text-purple-900">🖼️ My Gallery 🖼️</h2>
  <div className="flex justify-center mt-6">
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {["https://i.pinimg.com/736x/de/49/8e/de498e196ab6ed151386cfe75dcfe4a2.jpg",
        "https://i.pinimg.com/736x/51/da/06/51da06761dabe621b03da453b98696a7.jpg",
        "https://i.pinimg.com/736x/14/f2/71/14f271886faff02bda0dc6097ab00063.jpg",
        "https://i.pinimg.com/736x/32/b8/e6/32b8e6be7a5d365fd815e47fb450cde0.jpg",
        "https://i.pinimg.com/736x/4a/3e/34/4a3e34e7236fad3c2a85e88847f64770.jpg",
        "https://i.pinimg.com/736x/73/f8/5f/73f85f84f3dfc9df3df91fac105d8aad.jpg",
        "https://i.pinimg.com/736x/e3/93/bd/e393bde528e41aed119f19257e0d59d2.jpg",
        "https://i.pinimg.com/736x/a4/a9/4f/a4a94fbc3e92b8f1453ba0da357beaeb.jpg",
        "https://i.pinimg.com/736x/08/73/a6/0873a6e1443bf7cd2c0adddbb75a3236.jpg",
        "https://i.pinimg.com/736x/5a/73/63/5a7363c9264d889d79088328927e3c42.jpg"]
        .map((src, index) => (
          <div key={index} className="flex justify-center">
            <img 
              src={src} 
              alt="Gallery Item" 
              className="w-40 h-40 object-cover rounded-lg shadow-lg border-4 border-pink-400"
            />
          </div>
        ))}
    </Carousel>
  </div>
</motion.section>


      <motion.section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold text-purple-900">📞 Contact </h2>
        <p className="text-purple-700">📧 syedaumaizaunsa@gmail.com</p>
        <p className="text-purple-700">🔗 <a href="https://github.com/Star-1603" className="text-purple-800">GitHub</a> | <a href="https://in.linkedin.com/in/syeda-u maiza-unsa-29a648287" className="text-purple-800">LinkedIn</a></p>
        <p className="text-purple-700"> © Syeda Umaiza Unsa. All rights reserved. Still under development (I am not well versed in Full-Stack yet(┬┬﹏┬┬))</p>
      </motion.section>
    </motion.main>
  );
}
