// components/MeetingRequest.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaComment, FaWater, FaAnchor } from 'react-icons/fa';

const MeetingRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '30',
    purpose: '',
    message: ''
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
        phone: '',
        date: '',
        time: '',
        duration: '30',
        purpose: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="meeting-request" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 relative overflow-hidden">
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
            Request a Meeting
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-800">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-b from-blue-500 to-cyan-600 p-8 text-white">
                <h3 className="text-xl font-bold mb-6 font-poppins flex items-center">
                  <FaWater className="mr-2" />
                  Schedule a Meeting
                </h3>
                <p className="mb-6 font-poppins">
                  I'm available for virtual meetings and consultations. Please fill out the form to request a meeting at your convenience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-3" />
                    <span className="font-poppins">Monday - Friday</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-3" />
                    <span className="font-poppins">9:00 AM - 6:00 PM PST</span>
                  </div>
                </div>
                
                {/* Decorative anchor */}
                <div className="absolute bottom-8 left-8 text-white/20">
                  <FaAnchor className="text-4xl" />
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto mb-4">
                      <FaCalendarAlt className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-poppins">Meeting Request Sent!</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-poppins">
                      Thank you for your request. I'll get back to you soon to confirm the meeting details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-cyan-600 dark:text-cyan-400 mb-2 font-poppins">
                          <FaUser className="inline mr-2" /> Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-cyan-300 dark:border-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 font-poppins"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-cyan-600 dark:text-cyan-400 mb-2 font-poppins">
                          <FaEnvelope className="inline mr-2" /> Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-cyan-300 dark:border-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 font-poppins"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-cyan-600 dark:text-cyan-400 mb-2 font-poppins">
                          <FaPhone className="inline mr-2" /> Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-cyan-300 dark:border-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 font-poppins"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-cyan-600 dark:text-cyan-400 mb-2 font-poppins">
                          <FaCalendarAlt className="inline mr-2" /> Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-cyan-300 dark:border-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 font-poppins"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-cyan-600 dark:text-cyan-400 mb-2 font-poppins">
                          <FaClock className="inline mr-2" /> Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-cyan-300 dark:border-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 font-poppins"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-cyan-600 dark:text-cyan-400 mb-2 font-poppins">Duration</label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-cyan-300 dark:border-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 font-poppins"
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="45">45 minutes</option>
                          <option value="60">60 minutes</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-cyan-600 dark:text-cyan-400 mb-2 font-poppins">Purpose of Meeting</label>
                      <input
                        type="text"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        placeholder="e.g., Project Discussion, Consultation"
                        className="w-full px-4 py-2 border border-cyan-300 dark:border-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 font-poppins"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-cyan-600 dark:text-cyan-400 mb-2 font-poppins">
                        <FaComment className="inline mr-2" /> Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-cyan-300 dark:border-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 font-poppins"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 font-poppins"
                    >
                      Request Meeting
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingRequest;