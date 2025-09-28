// components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaCode, FaDesktop, FaMobileAlt, FaMountain } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'web', 'mobile', 'ui/ux', 'backend'];
  
  const projects = [
    {
      id: 1,
      title: 'Mountain Explorer',
      description: 'An interactive web application for exploring mountain trails and conservation efforts.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['web', 'react', 'node.js', 'mongodb'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      icon: <FaDesktop />
    },
    {
      id: 2,
      title: 'Forest Task Manager',
      description: 'A collaborative task management application with real-time updates inspired by forest ecosystems.',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['web', 'react', 'firebase', 'tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      icon: <FaDesktop />
    },
    {
      id: 3,
      title: 'Summit Tracker',
      description: 'A mobile application for tracking hiking trails and mountain expedition data.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['mobile', 'react native', 'redux', 'api'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
      icon: <FaMobileAlt />
    },
    {
      id: 4,
      title: 'Alpine Weather Dashboard',
      description: 'A responsive weather dashboard with mountain forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-904ecf22d7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['web', 'javascript', 'api', 'css'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
      icon: <FaDesktop />
    },
    {
      id: 5,
      title: 'Wildlife API',
      description: 'A secure RESTful API for wildlife research and forest monitoring.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['backend', 'node.js', 'express', 'mongodb'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
      icon: <FaCode />
    },
    {
      id: 6,
      title: 'Nature Conservation UI',
      description: 'A modern UI design for nature conservation organizations and initiatives.',
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
  

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
      {/* Clean gradient background - no waves or ocean elements */}
      
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
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                       
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <FaFilter className="text-teal-500" />
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 font-poppins ${
                      activeFilter === filter
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                        : 'bg-white dark:bg-teal-900/30 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-800/50 border border-teal-200 dark:border-teal-700'
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
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-teal-100 dark:border-teal-800"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                      className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaGithub />
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-blue-400 transition-colors"
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