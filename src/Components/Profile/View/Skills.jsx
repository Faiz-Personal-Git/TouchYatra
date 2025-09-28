// components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaMountain, FaTree, FaLeaf, FaHiking } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaMountain className="text-3xl" />,
      skills: [
        { name: "React", level: 95, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Vue.js", level: 80, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Angular", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "HTML/CSS", level: 90, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "JavaScript", level: 90, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Bootstrap", level: 85, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
      ]
    },
    {
      title: "Backend",
      icon: <FaTree className="text-3xl" />,
      skills: [
        { name: "Node.js", level: 90, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Express", level: 85, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Python", level: 80, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Django", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "PHP", level: 70, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Laravel", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Ruby", level: 65, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Java", level: 70, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
      ]
    },
    {
      title: "Database",
      icon: <FaLeaf className="text-3xl" />,
      skills: [
        { name: "MongoDB", level: 85, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "MySQL", level: 80, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "PostgreSQL", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Firebase", level: 80, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Redis", level: 70, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "SQLite", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaHiking className="text-3xl" />,
      skills: [
        { name: "Git", level: 90, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Docker", level: 80, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "AWS", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Figma", level: 85, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Webpack", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "Jest", level: 80, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "CI/CD", level: 75, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
        { name: "GraphQL", level: 70, color: "bg-gradient-to-r from-teal-500 to-blue-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
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
            My Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-teal-100 dark:border-teal-800"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-center font-playfair">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium font-poppins">{skill.name}</span>
                      <span className="text-sm font-medium text-teal-600 dark:text-blue-400 font-poppins">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-teal-200 dark:bg-teal-800 rounded-full h-2.5 overflow-hidden">
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
            <FaLeaf className="mr-2 text-teal-500" /> Technologies I Work With
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
                className="px-4 py-2 bg-white dark:bg-teal-900/30 rounded-full shadow-sm text-sm font-medium border border-teal-200 dark:border-teal-700 font-poppins"
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