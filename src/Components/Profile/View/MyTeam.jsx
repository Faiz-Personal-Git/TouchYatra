// components/MyTeam.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLinkedin, FaTwitter, FaDribbble, FaGithub ,FaWater, FaFish } from 'react-icons/fa';

const MyTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "UI/UX Designer",
      bio: "Creative designer with 7+ years of experience in creating intuitive user interfaces.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        dribbble: "https://dribbble.com"
      }
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Backend Developer",
      bio: "Expert in server-side technologies with a passion for scalable architecture.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "DevOps Engineer",
      bio: "Specializing in cloud infrastructure and automation to streamline development processes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "Frontend Developer",
      bio: "Passionate about creating responsive and accessible web applications.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  return (
    <section id="my-team" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#06b6d4" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
            My Team
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-cyan-700 dark:text-cyan-300 font-poppins">
          I'm proud to collaborate with a talented team of professionals who share my passion for 
          creating exceptional digital experiences. Together, we deliver innovative solutions that 
          exceed client expectations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-cyan-100 dark:border-cyan-800 relative"
            >
              {/* Decorative fish */}
              <motion.div 
                animate={{ x: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 12 }}
                className="absolute top-4 right-4 text-cyan-500/20"
              >
                <FaFish className="text-3xl" />
              </motion.div>
              
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 font-poppins">{member.name}</h3>
                <p className="text-cyan-600 dark:text-cyan-400 mb-3 font-poppins">{member.position}</p>
                <p className="text-cyan-700 dark:text-cyan-300 mb-4 font-poppins">{member.bio}</p>
                
                <div className="flex space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a 
                      key={platform}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-800/50 transition-colors"
                    >
                      {platform === 'linkedin' && <FaLinkedin />}
                      {platform === 'twitter' && <FaTwitter />}
                      {platform === 'dribbble' && <FaDribbble />}
                      {platform === 'github' && <FaGithub />}
                    </a>
                  ))}
                </div>
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

export default MyTeam;