// components/Hero.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowDown, FaCode, FaLaptopCode, FaMobileAlt, FaPalette, FaWater, FaFish, FaAnchor } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-20 relative overflow-hidden">
      {/* Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 via-blue-500 to-cyan-600 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900"></div>
        
        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="relative block w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className="fill-blue-100 dark:fill-blue-900"></path>
          </svg>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm animate-float animation-delay-4000"></div>
        
        {/* Ocean Creatures */}
        <motion.div 
          animate={{ x: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute top-1/3 left-10 text-white/30"
        >
          <FaFish className="text-4xl" />
        </motion.div>
        
        <motion.div 
          animate={{ x: [0, -80, 0] }}
          transition={{ repeat: Infinity, duration: 25 }}
          className="absolute top-1/2 right-20 text-white/30"
        >
          <FaFish className="text-3xl transform rotate-180" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4 font-poppins">
              Available for work
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-playfair text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">John Doe</span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-12 text-white font-poppins">
              <Typewriter
                words={['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className="text-lg mb-8 max-w-lg text-blue-100 font-poppins">
              I build responsive, accessible, and performant web applications with modern technologies.
              Passionate about creating exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-poppins"
              >
                Get In Touch
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 font-poppins"
              >
                View Projects
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf" 
                className="px-6 py-3 flex items-center gap-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors font-poppins"
                download
              >
                <FaDownload /> Resume
              </motion.a>
            </div>
            
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: <FaWater />, label: "Fluid Design" },
                { icon: <FaLaptopCode />, label: "Responsive" },
                { icon: <FaMobileAlt />, label: "Mobile First" },
                { icon: <FaAnchor />, label: "Stable Code" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-blue-100 font-poppins"
                >
                  <div className="text-cyan-300">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex space-x-4"
          >
            {[
              { icon: <FaGithub />, url: "https://github.com" },
              { icon: <FaLinkedin />, url: "https://linkedin.com" },
              { icon: <FaTwitter />, url: "https://twitter.com" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-md"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center shadow-lg"
            >
              <FaCode className="text-white text-xl" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute top-1/2 -right-8 w-14 h-14 rounded-full bg-blue-500/80 flex items-center justify-center shadow-lg"
            >
              <FaLaptopCode className="text-white text-xl" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              className="absolute -bottom-6 left-1/4 w-12 h-12 rounded-full bg-cyan-400/80 flex items-center justify-center shadow-lg"
            >
              <FaPalette className="text-white text-xl" />
            </motion.div>
            
            <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm text-white py-2 px-6 rounded-full shadow-lg flex items-center gap-2 font-poppins">
              <span className="font-bold">5+</span> Years Experience
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;















