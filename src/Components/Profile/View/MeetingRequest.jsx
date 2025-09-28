// components/MeetingRequest.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaComment, FaVideo, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const MeetingRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    purpose: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meeting request submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        purpose: ''
      });
    }, 3000);
  };

  return (
    <section id="meeting-request" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" style={{ backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            Schedule a Meeting
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-teal-100 dark:border-teal-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <FaVideo className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair">Meeting Request</h3>
                    <p className="text-sm text-teal-100 font-poppins">Available Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm font-poppins">Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Content */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mx-auto mb-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair">Request Sent!</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-poppins">
                    I'll get back to you soon to confirm the meeting details.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-teal-600 dark:text-teal-400 mb-1 font-poppins">
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-teal-500" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 border border-teal-300 dark:border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 font-poppins"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-teal-600 dark:text-teal-400 mb-1 font-poppins">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-teal-500" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 border border-teal-300 dark:border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 font-poppins"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-teal-600 dark:text-teal-400 mb-1 font-poppins">
                        Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaCalendarAlt className="text-teal-500" />
                        </div>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 border border-teal-300 dark:border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 font-poppins"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-teal-600 dark:text-teal-400 mb-1 font-poppins">
                        Time
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaClock className="text-teal-500" />
                        </div>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 border border-teal-300 dark:border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 font-poppins"
                        />
                      </div>
                    </div>
                  </div>
                    
                  <div className="mb-4">
                    <label className="block text-sm text-teal-600 dark:text-teal-400 mb-1 font-poppins">
                      Purpose
                    </label>
                    <input
                      type="text"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-teal-300 dark:border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 font-poppins"
                      placeholder="What's the meeting about?"
                    />
                  </div>
                    
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-medium flex items-center justify-center font-poppins"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Request
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-teal-100 dark:border-teal-800">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm text-teal-700 dark:text-teal-300 font-poppins">I typically respond within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetingRequest;