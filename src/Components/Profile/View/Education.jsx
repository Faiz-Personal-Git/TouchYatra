// components/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTree } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Summit State University",
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
      institution: "Forest University",
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
      institution: "Alpine Academy",
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
    <section id="education" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
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
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-teal-100 dark:border-teal-800 relative"
            >
              {/* Decorative tree */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute top-4 right-4 text-teal-500/20"
              >
                <FaTree className="text-3xl" />
              </motion.div>
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white mr-4">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-poppins">{edu.degree}</h3>
                    <p className="text-lg font-medium text-teal-600 dark:text-blue-400 font-poppins">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-teal-600 dark:text-blue-400 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span className="font-poppins">{edu.location}</span>
                </div>
                
                <div className="flex items-center text-teal-600 dark:text-blue-400 mb-4">
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
              
              {/* Simple bottom border instead of wave decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-600"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;