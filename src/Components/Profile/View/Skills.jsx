// components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaWater, FaFish, FaAnchor, FaShip, FaWaveSquare } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaWater className="text-3xl" />,
      skills: [
        { name: "React", level: 95, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "Vue.js", level: 80, color: "bg-gradient-to-r from-cyan-500 to-teal-500" },
        { name: "Angular", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-600" },
        { name: "HTML/CSS", level: 90, color: "bg-gradient-to-r from-blue-600 to-cyan-600" },
        { name: "JavaScript", level: 90, color: "bg-gradient-to-r from-cyan-600 to-teal-600" },
        { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-teal-600 to-blue-700" },
        { name: "Tailwind CSS", level: 90, color: "bg-gradient-to-r from-blue-700 to-cyan-700" },
        { name: "Bootstrap", level: 85, color: "bg-gradient-to-r from-cyan-700 to-teal-700" },
      ]
    },
    {
      title: "Backend",
      icon: <FaAnchor className="text-3xl" />,
      skills: [
        { name: "Node.js", level: 90, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "Express", level: 85, color: "bg-gradient-to-r from-cyan-500 to-teal-500" },
        { name: "Python", level: 80, color: "bg-gradient-to-r from-teal-500 to-blue-600" },
        { name: "Django", level: 75, color: "bg-gradient-to-r from-blue-600 to-cyan-600" },
        { name: "PHP", level: 70, color: "bg-gradient-to-r from-cyan-600 to-teal-600" },
        { name: "Laravel", level: 75, color: "bg-gradient-to-r from-teal-600 to-blue-700" },
        { name: "Ruby", level: 65, color: "bg-gradient-to-r from-blue-700 to-cyan-700" },
        { name: "Java", level: 70, color: "bg-gradient-to-r from-cyan-700 to-teal-700" },
      ]
    },
    {
      title: "Database",
      icon: <FaFish className="text-3xl" />,
      skills: [
        { name: "MongoDB", level: 85, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "MySQL", level: 80, color: "bg-gradient-to-r from-cyan-500 to-teal-500" },
        { name: "PostgreSQL", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-600" },
        { name: "Firebase", level: 80, color: "bg-gradient-to-r from-blue-600 to-cyan-600" },
        { name: "Redis", level: 70, color: "bg-gradient-to-r from-cyan-600 to-teal-600" },
        { name: "SQLite", level: 75, color: "bg-gradient-to-r from-teal-600 to-blue-700" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaShip className="text-3xl" />,
      skills: [
        { name: "Git", level: 90, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "Docker", level: 80, color: "bg-gradient-to-r from-cyan-500 to-teal-500" },
        { name: "AWS", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-600" },
        { name: "Figma", level: 85, color: "bg-gradient-to-r from-blue-600 to-cyan-600" },
        { name: "Webpack", level: 75, color: "bg-gradient-to-r from-cyan-600 to-teal-600" },
        { name: "Jest", level: 80, color: "bg-gradient-to-r from-teal-600 to-blue-700" },
        { name: "CI/CD", level: 75, color: "bg-gradient-to-r from-blue-700 to-cyan-700" },
        { name: "GraphQL", level: 70, color: "bg-gradient-to-r from-cyan-700 to-teal-700" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0ea5e9" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100 dark:border-blue-800"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-center font-playfair">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium font-poppins">{skill.name}</span>
                      <span className="text-sm font-medium text-blue-600 dark:text-cyan-400 font-poppins">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-2.5 rounded-full ${skill.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center font-playfair flex items-center justify-center">
            <FaWaveSquare className="mr-2 text-blue-500" /> Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Vue", "Angular", "Node.js", "Express", "Python", "Django", 
              "JavaScript", "TypeScript", "HTML5", "CSS3", "SASS", "Tailwind CSS", 
              "Bootstrap", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "AWS", 
              "Docker", "Git", "Figma", "Webpack", "Jest", "GraphQL"
            ].map((tech, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-4 py-2 bg-white dark:bg-blue-900/30 rounded-full shadow-sm text-sm font-medium border border-blue-200 dark:border-blue-700 font-poppins"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;