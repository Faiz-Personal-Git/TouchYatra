// components/Blog.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaComment, FaArrowRight, FaMountain, FaTree } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Nature-Themed Web Applications",
      excerpt: "Learn how to create immersive nature-themed web applications with modern technologies and design principles.",
      date: "May 15, 2023",
      author: "Alex Johnson",
      comments: 24,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Web Development"
    },
    {
      id: 2,
      title: "The Future of Mountain Technology",
      excerpt: "Exploring emerging technologies and trends that will shape the future of mountain conservation and research.",
      date: "Apr 28, 2023",
      author: "Alex Johnson",
      comments: 18,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Technology"
    },
    {
      id: 3,
      title: "Deep Dive into CSS Grid Layout",
      excerpt: "A comprehensive guide to CSS Grid Layout with practical examples and use cases for modern web design.",
      date: "Apr 10, 2023",
      author: "Alex Johnson",
      comments: 32,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "CSS"
    },
    {
      id: 4,
      title: "Introduction to TypeScript for Forest Developers",
      excerpt: "Learn how TypeScript can improve your JavaScript development experience with static typing and better tooling.",
      date: "Mar 22, 2023",
      author: "Alex Johnson",
      comments: 15,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "JavaScript"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-2 font-playfair"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
                
        {/* 3-column grid for blog posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                {/* Top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-teal-500 to-blue-600"></div>
                
                <div className="p-4">
                  <div className="flex items-center text-xs text-teal-600 dark:text-blue-400 mb-3">
                    <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-blue-200 rounded text-xs">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 font-poppins">{post.title}</h3>
                  
                  <div className="h-32 overflow-hidden rounded-lg mb-3">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2 font-poppins">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                      <FaUser className="mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <FaComment className="mr-1" />
                      <span>{post.comments}</span>
                    </div>
                    
                    <a 
                      href={`/blog/${post.id}`} 
                      className="flex items-center text-teal-600 dark:text-blue-400 hover:underline text-sm font-poppins"
                    >
                      Read More <FaArrowRight className="ml-1 text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm font-poppins"
          >
            View All Blog Posts
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blog;