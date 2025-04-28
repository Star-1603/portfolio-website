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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            A glimpse into who I am, what I love, and where I'm headed
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/4f/df/2f/4fdf2f0661fc338f59ff649ba582d79c.jpg" 
                alt="Portrait" 
                className="w-full h-96 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-secondary-100 rounded-full opacity-70 z-[-1]"></div>
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-accent-100 rounded-full opacity-70 z-[-1]"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
              Machine Learning Student & Enthusiast
            </h3>
            
            <p className="text-gray-600 mb-6">
              I'm a passionate student deeply interested in the world of machine learning and artificial intelligence. 
              My journey began with a curiosity about how machines can learn and adapt, which has now evolved into a dedicated pursuit of knowledge in this exciting field.
            </p>
            
            <p className="text-gray-600 mb-8">
              When I'm not coding or studying ML algorithms, you can find me experimenting with new datasets, 
              participating in hackathons, or simply enjoying a good book on technology and innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Education</h4>
                  <p className="text-gray-600">Computer Science Student</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-secondary-100 rounded-lg text-secondary-600">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Learning</h4>
                  <p className="text-gray-600">Deep Learning & NLP</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent-100 rounded-lg text-accent-600">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Passion</h4>
                  <p className="text-gray-600">Solving Real Problems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Hobbies</h4>
                  <p className="text-gray-600">Reading & Photography</p>
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