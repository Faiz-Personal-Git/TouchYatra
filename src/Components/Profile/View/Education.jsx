// components/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaWater, FaFish } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Ocean State University",
      location: "Stanford, CA",
      period: "2013 - 2015",
      description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
      achievements: [
        "GPA: 3.9/4.0",
        "Published research paper on machine learning applications",
        "President of Computer Science Society"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "Coastal University",
      location: "Berkeley, CA",
      period: "2009 - 2013",
      description: "Comprehensive education in computer science fundamentals with focus on web technologies.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List for 6 consecutive semesters",
        "Won first place in annual hackathon"
      ]
    },
    {
      id: 3,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Deep Sea Academy",
      location: "San Francisco, CA",
      period: "2015",
      description: "Intensive 12-week program focusing on modern web development technologies and best practices.",
      achievements: [
        "Built 5 full-stack applications",
        "Collaborated on team projects using agile methodologies",
        "Graduated top of class"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0891b2" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-cyan-200/30 dark:bg-cyan-800/30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-blue-200/30 dark:bg-blue-800/30 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-cyan-100 dark:border-cyan-800 relative"
            >
              {/* Decorative fish */}
              <motion.div 
                animate={{ x: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 15 }}
                className="absolute top-4 right-4 text-cyan-500/20"
              >
                <FaFish className="text-3xl" />
              </motion.div>
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white mr-4">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-poppins">{edu.degree}</h3>
                    <p className="text-lg font-medium text-cyan-600 dark:text-cyan-400 font-poppins">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-cyan-600 dark:text-cyan-400 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span className="font-poppins">{edu.location}</span>
                </div>
                
                <div className="flex items-center text-cyan-600 dark:text-cyan-400 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span className="font-poppins">{edu.period}</span>
                </div>
                
                <p className="mb-4 font-poppins">{edu.description}</p>
                
                <ul className="list-disc pl-5 space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm font-poppins">{achievement}</li>
                  ))}
                </ul>
              </div>
              
              {/* Wave decoration */}
              <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
                <svg className="relative block w-full h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                    className="fill-cyan-100 dark:fill-cyan-900"></path>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;