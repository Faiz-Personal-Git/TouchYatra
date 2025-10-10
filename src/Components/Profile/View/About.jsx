
// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMountain, FaHiking, FaLanguage, FaHeart, FaMusic, FaCamera, 
  FaPlane, FaUtensils, FaBook, FaGlobe
} from 'react-icons/fa';

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Alex Johnson' },
    { label: 'Email', value: 'alex@example.com' },
    { label: 'Location', value: 'San Francisco, CA' },
    { label: 'Availability', value: 'Full-time, Freelance' },
  ];

  const interests = [
    { name: 'Hiking', icon: <FaHiking /> },
    { name: 'Photography', icon: <FaCamera /> },
    { name: 'Traveling', icon: <FaPlane /> },
    { name: 'Cooking', icon: <FaUtensils /> },
    { name: 'Music', icon: <FaMusic /> },
    { name: 'Reading', icon: <FaBook /> },
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Spanish', level: 'Intermediate' },
    { name: 'French', level: 'Basic' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair text-teal-700 dark:text-teal-300"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Personal Journey and Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-teal-100 dark:border-teal-900">
              <h3 className="text-2xl font-semibold mb-6 text-teal-600 dark:text-blue-400 font-playfair flex items-center">
                <FaMountain className="mr-2" /> My Journey
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
                    className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg border border-teal-100 dark:border-teal-800"
                  >
                    <h4 className="text-sm text-teal-600 dark:text-blue-400 mb-1 font-poppins">{info.label}</h4>
                    <p className="font-medium font-poppins">{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Professional Interests & Languages */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 space-y-8"
          >
            {/* Interests & Hobbies Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-teal-100 dark:border-teal-900">
              <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-blue-400 font-playfair flex items-center">
                <FaHeart className="mr-2" /> Interests & Hobbies
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="flex items-center p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800"
                  >
                    <div className="text-teal-500 dark:text-blue-400 mr-3">
                      {interest.icon}
                    </div>
                    <span className="font-medium font-poppins text-gray-700 dark:text-gray-300">
                      {interest.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Languages Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-teal-100 dark:border-teal-900">
              <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-blue-400 font-playfair flex items-center">
                <FaLanguage className="mr-2" /> Languages
              </h3>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex items-center"
                  >
                    <div className="w-24 font-medium font-poppins text-gray-700 dark:text-gray-300">
                      {lang.name}
                    </div>
                    <div className="flex-1">
                      <div className="w-full bg-teal-200 dark:bg-teal-800 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: lang.level === 'Native' ? '100%' : lang.level === 'Intermediate' ? '70%' : '40%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                    <div className="w-24 text-right text-sm font-medium text-teal-600 dark:text-blue-400 font-poppins">
                      {lang.level}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;