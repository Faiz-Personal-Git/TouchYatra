// components/MyTeam.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLinkedin, FaTwitter, FaDribbble, FaGithub, FaMountain, FaTree } from 'react-icons/fa';

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
    <section id="my-team" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair flex items-center justify-center"
          >
            <FaUsers className="mr-3 text-teal-500" /> My Team
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-300 font-poppins">
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
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                {/* Top accent bar */}
                <div className="h-2 bg-gradient-to-r from-teal-500 to-blue-600"></div>
                
                {/* Image section */}
                <div className="p-6 pt-10 -mt-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative tree icon */}
                    <div className="absolute -top-2 -right-2 text-teal-500/20">
                      <FaTree className="text-3xl" />
                    </div>
                  </div>
                  
                  {/* Team member info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-1 font-poppins">{member.name}</h3>
                    <p className="text-teal-600 dark:text-blue-400 font-poppins">{member.position}</p>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-6 font-poppins">
                    {member.bio}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex justify-center space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-blue-400 hover:bg-teal-200 dark:hover:bg-teal-800/50 transition-colors"
                      >
                        {platform === 'linkedin' && <FaLinkedin />}
                        {platform === 'twitter' && <FaTwitter />}
                        {platform === 'dribbble' && <FaDribbble />}
                        {platform === 'github' && <FaGithub />}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;