
// components/Hero.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaShareAlt, FaUserPlus, FaArrowRight, FaYoutube, FaTiktok, FaDiscord, FaTelegram, FaDribbble, FaBehance, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com", color: "hover:text-white" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:text-blue-300" },
    { icon: <FaTwitter />, url: "https://twitter.com", color: "hover:text-cyan-300" },
    { icon: <FaInstagram />, url: "https://instagram.com", color: "hover:text-pink-300" },
    { icon: <FaFacebook />, url: "https://facebook.com", color: "hover:text-blue-400" },
    { icon: <FaYoutube />, url: "https://youtube.com", color: "hover:text-red-400" },
    { icon: <FaTiktok />, url: "https://tiktok.com", color: "hover:text-pink-400" },
    { icon: <FaDiscord />, url: "https://discord.com", color: "hover:text-indigo-400" },
    { icon: <FaTelegram />, url: "https://telegram.com", color: "hover:text-blue-400" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-20 relative overflow-hidden">
      {/* Nature/Mountain Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Mountain Background" 
          className="w-full h-full object-cover"
        />
        {/* Only a subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image and Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Social Media Links - New Pattern: 5-4-3 layout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6"
            >
              {/* First Row - 5 icons */}
              <div className="flex justify-center gap-3 mb-3">
                {socialLinks.slice(0, 5).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 text-base transition-colors ${social.color} border border-white/20`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              {/* Second Row - 4 icons */}
              <div className="flex justify-center gap-3 mb-3">
                {socialLinks.slice(5, 9).map((social, index) => (
                  <motion.a
                    key={index + 5}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 text-base transition-colors ${social.color} border border-white/20`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              {/* Third Row - 3 icons */}
              <div className="flex justify-center gap-3 mb-6">
                {socialLinks.slice(9, 12).map((social, index) => (
                  <motion.a
                    key={index + 9}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 text-base transition-colors ${social.color} border border-white/20`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Share and Save Contact Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaShareAlt />
                <span>Share</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaUserPlus />
                <span>Save Contact</span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Name and Description */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full mb-6 border border-teal-400/30"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
              <span className="text-white font-medium">Available for work</span>
            </motion.div>
            
            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="block text-white">Alex</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">Johnson</span>
            </motion.h1>
            
            {/* Role/Title with Typewriter Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6 h-12"
            >
              <h2 className="text-2xl font-semibold text-teal-300">
                <Typewriter
                  words={['Full Stack Developer', 'UI/UX Designer', 'Creative Problem Solver']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h2>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-white/80 mb-8 leading-relaxed"
            >
              I create exceptional digital experiences that blend creativity with functionality. 
              With expertise in modern web technologies, I build responsive and user-friendly applications 
              that solve real-world problems. Passionate about clean code, intuitive design, and continuous learning.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <FaArrowRight />
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-10 h-16 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-2 h-6 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;