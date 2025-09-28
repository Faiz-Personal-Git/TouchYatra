// components/YouTube.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlay, FaMountain, FaTree } from 'react-icons/fa';

const YouTube = () => {
  const videos = [
    {
      id: 1,
      title: "Building Nature-Themed React Applications",
      description: "Learn how to build professional nature-themed applications using React and modern CSS techniques.",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "24:15",
      views: "15.2K",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Deep Dive into Node.js Authentication",
      description: "Complete guide to implementing authentication in Node.js using JSON Web Tokens and nature security principles.",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "32:48",
      views: "8.7K",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: Nature Layouts",
      description: "Understanding the differences between CSS Grid and Flexbox with nature-themed layout examples.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "18:32",
      views: "12.4K",
      videoId: "dQw4w9WgXcQ"
    }
  ];

  return (
    <section id="youtube" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-2 font-playfair flex items-center"
            >
              <FaYoutube className="mr-3 text-red-500" /> YouTube Channel
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-teal-500 to-blue-600"
            ></motion.div>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-sm font-poppins"
          >
            <FaYoutube className="text-xl" /> Subscribe to My Channel
          </motion.a>
        </div>
        
        <p className="text-center max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300 text-sm font-poppins">
          I share tutorials, coding tips, and insights about web development on my YouTube channel. 
          Subscribe to stay updated with my latest content!
        </p>
        
        {/* 3-column grid for videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                {/* Top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-teal-500 to-blue-600"></div>
                
                <div className="relative">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Decorative tree */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute top-4 right-4 text-teal-500/20"
                  >
                    <FaTree className="text-3xl" />
                  </motion.div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
                      <FaPlay className="text-white text-lg ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 font-poppins">{video.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2 font-poppins">{video.description}</p>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{video.views} views</span>
                    <span>2 days ago</span>
                  </div>
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