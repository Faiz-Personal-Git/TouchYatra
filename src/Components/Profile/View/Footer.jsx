// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode, FaPalette, FaLaptopCode, FaGem } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" style={{ backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
      
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <FaGem className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-playfair">Get In Touch</h3>
                    <p className="text-xs text-teal-100 font-poppins">I'd love to hear from you</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <span className="text-sm font-poppins">Contact Me</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold mr-3">
                      <FaGem className="text-lg" />
                    </div>
                    <span className="text-xl font-bold font-playfair text-blue-900 dark:text-blue-100">John Doe</span>
                  </div>
                  <p className="mb-4 text-gray-600 dark:text-gray-400 font-poppins">
                    Full Stack Developer specializing in creating exceptional digital experiences.
                  </p>
                  <div className="flex space-x-3">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/30 transition-colors">
                      <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/30 transition-colors">
                      <FaLinkedin />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/30 transition-colors">
                      <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-900/30 transition-colors">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                
                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-bold mb-4 font-playfair text-blue-900 dark:text-blue-100 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-teal-500" />
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item.toLowerCase()}`} 
                          className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-poppins flex items-center group"
                        >
                          <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 group-hover:scale-125 transition-transform"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Services */}
                <div>
                  <h3 className="text-lg font-bold mb-4 font-playfair text-blue-900 dark:text-blue-100 flex items-center">
                    <FaCode className="mr-2 text-teal-500" />
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {['Web Development', 'UI/UX Design', 'Mobile App Development', 'Consulting', 'Training'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-poppins flex items-center group">
                          <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 group-hover:scale-125 transition-transform"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Resources */}
                <div>
                  <h3 className="text-lg font-bold mb-4 font-playfair text-blue-900 dark:text-blue-100 flex items-center">
                    <FaLaptopCode className="mr-2 text-teal-500" />
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    {['Blog', 'YouTube Channel', 'Templates', 'Tutorials', 'FAQ'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-poppins flex items-center group">
                          <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 group-hover:scale-125 transition-transform"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0 font-poppins">
                  &copy; {new Date().getFullYear()} John Doe. All rights reserved.
                </p>
                
                <button 
                  onClick={scrollToTop}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg transition-all font-poppins shadow-lg hover:shadow-teal-500/20"
                >
                  <FaArrowUp /> Back to Top
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-teal-100 dark:border-teal-800">
            <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
            <span className="text-sm text-teal-700 dark:text-teal-300 font-poppins">Thank you for visiting</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;