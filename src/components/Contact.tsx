import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

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
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0c] overflow-hidden">

      {/* ambient haze */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(120,119,198,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(80,120,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="container-wrapper relative z-10">

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl text-white font-semibold tracking-tight"
          >
            Contact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.6 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base"
          >
            if something resonates — reach out
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >

          {/* LEFT PANEL */}
          <motion.div className="md:col-span-5">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">

              <h3 className="text-xl text-white mb-6">Contact Information</h3>

              <div className="space-y-6 text-sm">

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/10 rounded-lg text-gray-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">email</p>
                    <a className="text-gray-300 hover:text-white transition">
                      syedaumaizaunsa@gmail.com <br />
                      su2190@srmist.edu.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/10 rounded-lg text-gray-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">location</p>
                    <p className="text-gray-300">Chennai, India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-500 text-xs mb-3">elsewhere</p>
                  <div className="flex space-x-4">

                    <a
                      href="https://www.linkedin.com/in/syeda-umaiza-unsa-29a648287/"
                      className="p-2 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition"
                    >
                      <Linkedin size={18} />
                    </a>

                    <a
                      href="https://www.instagram.com/mimiskies_03/"
                      className="p-2 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition"
                    >
                      <Instagram size={18} />
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div className="md:col-span-7">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">

              <h3 className="text-xl text-white mb-6">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6 text-sm">

                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="name"
                  className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg text-gray-300 placeholder-gray-600 focus:border-white/30 outline-none transition"
                />

                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="email"
                  className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg text-gray-300 placeholder-gray-600 focus:border-white/30 outline-none transition"
                />

                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="message"
                  className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg text-gray-300 placeholder-gray-600 focus:border-white/30 outline-none resize-none transition"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-white/10 hover:bg-white/20 text-gray-200 rounded-lg transition"
                >
                  {submitted ? 'sent.' : 'send message'}
                </button>

                {submitted && (
                  <p className="text-center text-xs text-gray-500">
                    message received — i'll get back to you
                  </p>
                )}

              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;