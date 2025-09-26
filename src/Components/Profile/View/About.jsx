// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaUsers, FaChartLine, FaWater, FaShip, FaAnchor } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: <FaCode /> },
    { name: 'Backend Development', level: 85, icon: <FaCode /> },
    { name: 'UI/UX Design', level: 75, icon: <FaLightbulb /> },
    { name: 'Team Leadership', level: 80, icon: <FaUsers /> },
    { name: 'Project Management', level: 70, icon: <FaChartLine /> },
  ];

  const personalInfo = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john@example.com' },
    { label: 'Location', value: 'San Francisco, CA' },
    { label: 'Availability', value: 'Full-time, Freelance' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Ocean Waves Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-300 to-transparent"></div>
        <div className="absolute top-32 left-0 w-full h-32 bg-gradient-to-b from-cyan-300 to-transparent"></div>
        <div className="absolute top-64 left-0 w-full h-32 bg-gradient-to-b from-blue-400 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-blue-200/30 dark:bg-blue-800/30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-cyan-200/30 dark:bg-cyan-800/30 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-cyan-400 font-playfair flex items-center">
                <FaWater className="mr-2" /> My Journey
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300 font-poppins">
                I'm a passionate full-stack developer with over 5 years of experience building web applications. 
                My journey started with a curiosity about how websites work, and it has evolved into a career 
                where I get to solve complex problems and create beautiful, functional user experiences.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300 font-poppins">
                I specialize in JavaScript ecosystem, particularly React and Node.js, but I'm always eager to 
                learn new technologies and frameworks. I believe in writing clean, maintainable code and 
                following best practices to ensure scalability and performance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-poppins">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and speaking at tech meetups.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800"
                  >
                    <h4 className="text-sm text-blue-600 dark:text-cyan-400 mb-1 font-poppins">{info.label}</h4>
                    <p className="font-medium font-poppins">{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 p-8 rounded-2xl shadow-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600 dark:text-cyan-400 font-playfair flex items-center justify-center">
                <FaShip className="mr-2" /> Skills & Expertise
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-blue-500 dark:text-cyan-400">
                          {skill.icon}
                        </div>
                        <span className="font-medium font-poppins">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-cyan-400 font-poppins">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4 text-center font-poppins">Technologies I Work With</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {['React', 'Vue', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="px-4 py-2 bg-white dark:bg-blue-800 rounded-full shadow-sm text-sm font-medium border border-blue-200 dark:border-blue-700 font-poppins"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;