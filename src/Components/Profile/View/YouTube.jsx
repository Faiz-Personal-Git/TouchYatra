// components/YouTube.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlay, FaWater, FaFish } from 'react-icons/fa';

const YouTube = () => {
  const videos = [
    {
      id: 1,
      title: "Building Ocean-Themed React Applications",
      description: "Learn how to build professional ocean-themed applications using React and modern CSS techniques.",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "24:15",
      views: "15.2K",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Deep Dive into Node.js Authentication",
      description: "Complete guide to implementing authentication in Node.js using JSON Web Tokens and ocean security principles.",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "32:48",
      views: "8.7K",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: Ocean Layouts",
      description: "Understanding the differences between CSS Grid and Flexbox with ocean-themed layout examples.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "18:32",
      views: "12.4K",
      videoId: "dQw4w9WgXcQ"
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0891b2" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-cyan-200/30 dark:bg-cyan-800/30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-blue-200/30 dark:bg-blue-800/30 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-2 font-playfair"
            >
              YouTube Channel
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600"
            ></motion.div>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors font-poppins"
          >
            <FaYoutube className="text-xl" /> Subscribe to My Channel
          </motion.a>
        </div>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-cyan-700 dark:text-cyan-300 font-poppins">
          I share tutorials, coding tips, and insights about web development on my YouTube channel. 
          Subscribe to stay updated with my latest content!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-cyan-100 dark:border-cyan-800 group"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                
                {/* Decorative fish */}
                <motion.div 
                  animate={{ x: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 10 }}
                  className="absolute top-4 right-4 text-cyan-500/20"
                >
                  <FaFish className="text-3xl" />
                </motion.div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 font-poppins">{video.title}</h3>
                <p className="text-cyan-700 dark:text-cyan-300 text-sm mb-3 font-poppins">{video.description}</p>
                <div className="flex justify-between text-sm text-cyan-600 dark:text-cyan-400">
                  <span>{video.views} views</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTube;