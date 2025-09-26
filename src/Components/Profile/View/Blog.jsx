// components/Blog.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaComment, FaArrowRight, FaWater, FaAnchor } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Ocean-Themed Web Applications",
      excerpt: "Learn how to create immersive ocean-themed web applications with modern technologies and design principles.",
      date: "May 15, 2023",
      author: "John Doe",
      comments: 24,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Web Development"
    },
    {
      id: 2,
      title: "The Future of Ocean Technology",
      excerpt: "Exploring emerging technologies and trends that will shape the future of ocean conservation and research.",
      date: "Apr 28, 2023",
      author: "John Doe",
      comments: 18,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Technology"
    },
    {
      id: 3,
      title: "Deep Dive into CSS Grid Layout",
      excerpt: "A comprehensive guide to CSS Grid Layout with practical examples and use cases for modern web design.",
      date: "Apr 10, 2023",
      author: "John Doe",
      comments: 32,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "CSS"
    },
    {
      id: 4,
      title: "Introduction to TypeScript for Ocean Developers",
      excerpt: "Learn how TypeScript can improve your JavaScript development experience with static typing and better tooling.",
      date: "Mar 22, 2023",
      author: "John Doe",
      comments: 15,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "JavaScript"
    }
  ];

  const categories = ["All", "Web Development", "Technology", "CSS", "JavaScript", "Ocean Tech"];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 relative overflow-hidden">
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
            Latest Blog Posts
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-poppins ${
                index === 0 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-md' 
                  : 'bg-white dark:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800/50 border border-blue-200 dark:border-blue-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 dark:border-blue-800 group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                
                {/* Decorative anchor */}
                <div className="absolute bottom-4 right-4 text-white/20">
                  <FaAnchor className="text-2xl" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-cyan-600 dark:text-cyan-400 mb-3">
                  <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 rounded">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <FaCalendarAlt className="mr-1" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-poppins">{post.title}</h3>
                <p className="text-cyan-700 dark:text-cyan-300 mb-4 font-poppins">{post.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-cyan-600 dark:text-cyan-400">
                    <FaUser className="mr-1" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <FaComment className="mr-1" />
                    <span>{post.comments} Comments</span>
                  </div>
                  
                  <a 
                    href={`/blog/${post.id}`} 
                    className="flex items-center text-blue-600 dark:text-cyan-400 hover:underline font-poppins"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 font-poppins"
          >
            View All Blog Posts
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blog;