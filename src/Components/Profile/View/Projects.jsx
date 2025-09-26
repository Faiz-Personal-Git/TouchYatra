// components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaCode, FaDesktop, FaMobileAlt, FaWater } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'web', 'mobile', 'ui/ux', 'backend'];
  
  const projects = [
    {
      id: 1,
      title: 'Ocean Explorer',
      description: 'An interactive web application for exploring marine life and ocean conservation efforts.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['web', 'react', 'node.js', 'mongodb'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      icon: <FaDesktop />
    },
    {
      id: 2,
      title: 'Tidal Task Manager',
      description: 'A collaborative task management application with real-time updates inspired by ocean tides.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['web', 'react', 'firebase', 'tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      icon: <FaDesktop />
    },
    {
      id: 3,
      title: 'Deep Sea Tracker',
      description: 'A mobile application for tracking oceanographic data and marine research findings.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['mobile', 'react native', 'redux', 'api'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
      icon: <FaMobileAlt />
    },
    {
      id: 4,
      title: 'Marine Weather Dashboard',
      description: 'A responsive weather dashboard with ocean forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-904ecf22d7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['web', 'javascript', 'api', 'css'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
      icon: <FaDesktop />
    },
    {
      id: 5,
      title: 'Coral Reef API',
      description: 'A secure RESTful API for marine biology research and coral reef monitoring.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['backend', 'node.js', 'express', 'mongodb'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
      icon: <FaCode />
    },
    {
      id: 6,
      title: 'Ocean Conservation UI',
      description: 'A modern UI design for ocean conservation organizations and initiatives.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['ui/ux', 'figma', 'prototyping'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
      icon: <FaDesktop />
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0ea5e9" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-blue-200/30 dark:bg-blue-800/30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-cyan-200/30 dark:bg-cyan-800/30 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            My Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-10 text-center font-playfair flex items-center justify-center"
          >
            <FaWater className="mr-2 text-blue-500" /> Featured Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 dark:border-blue-800"
              >
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md text-blue-500 dark:text-cyan-400">
                    {project.icon}
                  </div>
                </div>
                
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 font-poppins">{project.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-poppins">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full text-xs font-medium font-poppins">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-poppins"
                    >
                      <FaGithub /> Code
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-medium font-poppins"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-4 md:mb-0 font-playfair"
            >
              All Projects
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <FaFilter className="text-blue-600 dark:text-cyan-400" />
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 font-poppins ${
                      activeFilter === filter
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-md'
                        : 'bg-white dark:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800/50 border border-blue-200 dark:border-blue-700'
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 dark:border-blue-800"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-2 font-poppins">{project.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 font-poppins">{project.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <FaGithub />
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;