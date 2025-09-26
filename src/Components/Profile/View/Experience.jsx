// components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaWater, FaShip, FaAnchor } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Senior Full Stack Developer",
      company: "OceanTech Innovations",
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
      company: "DeepSea Digital",
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
      company: "Coral StartUp Ventures",
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
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0284c7" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
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
            Work Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 border-4 border-white dark:border-gray-900 z-10 hidden md:block"></div>
                
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-800"
                  >
                    <h3 className="text-xl font-bold mb-2 font-poppins">{exp.position}</h3>
                    <div className="flex items-center text-cyan-600 dark:text-cyan-400 mb-2">
                      <span className="font-medium font-poppins">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <FaMapMarkerAlt className="mr-1" />
                      <span className="font-poppins">{exp.location}</span>
                    </div>
                    <div className="flex items-center text-cyan-600 dark:text-cyan-400 mb-4">
                      <FaCalendarAlt className="mr-2" />
                      <span className="font-poppins">{exp.period}</span>
                    </div>
                    <p className="mb-4 font-poppins">{exp.description}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm font-poppins">{achievement}</li>
                      ))}
                    </ul>
                    
                    {/* Decorative anchor */}
                    <div className="absolute bottom-4 right-4 text-blue-500/20">
                      <FaAnchor className="text-2xl" />
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