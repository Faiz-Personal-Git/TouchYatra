// components/Videos.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCalendarAlt, FaTimes, FaDesktop } from 'react-icons/fa';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const videos = [
    {
      id: 1,
      title: "Web Development Conference Talk",
      description: "My talk at the Web Dev Conference 2023 about modern JavaScript frameworks and performance optimization.",
      date: "June 15, 2023",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "45:20",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Sample video URL
    },
    {
      id: 2,
      title: "React Performance Optimization",
      description: "Workshop on optimizing React applications for better performance with real-world examples.",
      date: "April 22, 2023",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "1:12:45",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Sample video URL
    },
    {
      id: 3,
      title: "Full Stack Development Masterclass",
      description: "A comprehensive masterclass covering both frontend and backend development with modern tools.",
      date: "March 10, 2023",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      duration: "2:30:15",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Sample video URL
    }
  ];

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" style={{ backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-teal-200/30 dark:bg-teal-800/30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-blue-200/30 dark:bg-blue-800/30 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            Video Resources
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
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-teal-100 dark:border-teal-800 group"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                
                {/* Decorative desktop icon */}
                <div className="absolute bottom-4 right-4 text-teal-500/20">
                  <FaDesktop className="text-2xl" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => handlePlayVideo(video)}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <FaPlay className="text-white text-xl ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 font-poppins">{video.title}</h3>
                <p className="text-teal-700 dark:text-teal-300 text-sm mb-3 font-poppins">{video.description}</p>
                <div className="flex items-center text-sm text-teal-600 dark:text-teal-400">
                  <FaCalendarAlt className="mr-2" />
                  <span>{video.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={handleCloseVideo}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-teal-300 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
              <iframe 
                src={selectedVideo.videoUrl} 
                title={selectedVideo.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
              <p className="text-teal-300">{selectedVideo.description}</p>
              <div className="flex items-center mt-2 text-sm text-teal-200">
                <FaCalendarAlt className="mr-2" />
                <span>{selectedVideo.date}</span>
                <span className="mx-3">•</span>
                <span>{selectedVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;