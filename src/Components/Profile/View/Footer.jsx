// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp, FaWater, FaAnchor } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-cyan-900 text-white py-12 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0ea5e9" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-blue-500/20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-cyan-500/20 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold mr-3">
                JD
              </div>
              <span className="text-xl font-bold font-poppins">John Doe</span>
            </div>
            <p className="mb-4 text-cyan-100 font-poppins">
              Full Stack Developer specializing in creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-cyan-100 hover:text-white transition-colors font-poppins"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Mobile App Development', 'Consulting', 'Training'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cyan-100 hover:text-white transition-colors font-poppins">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'YouTube Channel', 'Templates', 'Tutorials', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cyan-100 hover:text-white transition-colors font-poppins">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyan-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyan-100 mb-4 md:mb-0 font-poppins">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-800 hover:bg-cyan-700 rounded-lg transition-colors font-poppins"
          >
            <FaArrowUp /> Back to Top
          </button>
        </div>
      </div>
      
      {/* Decorative anchor */}
      <div className="absolute bottom-8 right-8 text-cyan-500/20">
        <FaAnchor className="text-4xl" />
      </div>
    </footer>
  );
};

export default Footer;