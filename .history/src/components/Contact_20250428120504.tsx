import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a backend
    console.log('Form submitted:', formState);
    setSubmitted(true);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
    // Reset submitted status after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

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
    <section id="contact" className="section-padding bg-secondary-50 relative">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Have a question or want to collaborate? I'd love to hear from you!
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          <motion.div variants={itemVariants} className="md:col-span-5">
            <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
              <h3 className="text-2xl font-medium text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <a href="mailto:hello@example.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                      syedaumaizaunsa@gmail.com <br /> su2190@srmist.edu.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">SRM University, Chennai</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/syeda-umaiza-unsa-29a648287/" className="p-2 bg-primary-100 rounded-lg text-primary-600 hover:bg-primary-200 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/mimiskies_03/" className="p-2 bg-primary-100 rounded-lg text-primary-600 hover:bg-primary-200 transition-colors">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-7">
            <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
              <h3 className="text-2xl font-medium text-gray-800 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    {submitted ? 'Message Sent!' : 'Send Message'}
                  </button>
                  
                  {submitted && (
                    <p className="mt-2 text-sm text-accent-600 text-center">
                      Thanks for your message! I'll get back to you soon.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;