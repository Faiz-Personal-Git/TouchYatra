// components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaTree } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Senior Full Stack Developer",
      company: "SummitTech Solutions",
      location: "San Francisco, CA",
      period: "Jan 2020 - Present",
      description: "Lead development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
      achievements: [
        "Reduced page load time by 40% through optimization techniques",
        "Led a team of 5 developers to deliver a major project 2 months ahead of schedule",
        "Implemented CI/CD pipeline that reduced deployment time by 60%"
      ]
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Alpine Digital Agency",
      location: "New York, NY",
      period: "Jun 2017 - Dec 2019",
      description: "Developed responsive web applications using modern JavaScript frameworks. Collaborated with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Built a customer dashboard that increased user engagement by 35%",
        "Migrated legacy codebase to React, improving maintainability",
        "Implemented automated testing that reduced bugs by 50%"
      ]
    },
    {
      id: 3,
      position: "Junior Web Developer",
      company: "Forest StartUp Ventures",
      location: "Austin, TX",
      period: "Mar 2015 - May 2017",
      description: "Assisted in developing and maintaining company websites and web applications. Gained experience in full-stack development and agile methodologies.",
      achievements: [
        "Contributed to the development of a SaaS product that acquired 10,000+ users",
        "Learned and implemented modern web technologies quickly",
        "Participated in all phases of the software development lifecycle"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
      {/* Clean gradient background - no waves, mountains, or bubbles */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            Work Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-blue-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 border-4 border-white dark:border-gray-900 z-10 hidden md:block"></div>
                
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-teal-100 dark:border-teal-800"
                  >
                    <h3 className="text-xl font-bold mb-2 font-poppins">{exp.position}</h3>
                    <div className="flex items-center text-teal-600 dark:text-blue-400 mb-2">
                      <span className="font-medium font-poppins">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <FaMapMarkerAlt className="mr-1" />
                      <span className="font-poppins">{exp.location}</span>
                    </div>
                    <div className="flex items-center text-teal-600 dark:text-blue-400 mb-4">
                      <FaCalendarAlt className="mr-2" />
                      <span className="font-poppins">{exp.period}</span>
                    </div>
                    <p className="mb-4 font-poppins">{exp.description}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm font-poppins">{achievement}</li>
                      ))}
                    </ul>
                    
                    {/* Decorative tree */}
                    <div className="absolute bottom-4 right-4 text-teal-500/20">
                      <FaTree className="text-2xl" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;