// components/ProfileAnalytics.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaUsers, FaChartLine, FaGlobe, FaMobileAlt, FaDesktop, FaTabletAlt, FaFire, FaArrowUp, FaStar } from 'react-icons/fa';

const ProfileAnalytics = () => {
  const stats = [
    { title: "Views", value: "12.4K", change: "+12%", icon: <FaEye /> },
    { title: "Visitors", value: "8.9K", change: "+8%", icon: <FaUsers /> },
    { title: "Engagement", value: "68%", change: "+5%", icon: <FaChartLine /> },
    { title: "Requests", value: "247", change: "+15%", icon: <FaGlobe /> }
  ];

  const quickStats = [
    { label: "Direct Traffic", value: "45%", color: "bg-teal-500" },
    { label: "Social Media", value: "25%", color: "bg-blue-500" },
    { label: "Search", value: "20%", color: "bg-cyan-500" },
    { label: "Referrals", value: "10%", color: "bg-indigo-500" }
  ];

  return (
    <section id="profile-analytics" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
            className="text-3xl font-bold mb-2 font-playfair text-blue-900 dark:text-blue-100"
          >
            Profile Analytics
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"
          ></motion.div>
        </div>
        
        {/* Main Analytics Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50 mb-8"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-5 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <FaStar className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-playfair">Performance Overview</h3>
                  <p className="text-xs text-teal-100 font-poppins">Last 30 days</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-teal-100 font-poppins">Growth Rate</div>
                <div className="flex items-center justify-end">
                  <FaArrowUp className="mr-1" />
                  <span className="font-bold">+10.5%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 border border-teal-100 dark:border-teal-800"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-3">
                      {stat.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 font-poppins">{stat.title}</div>
                  </div>
                  <div className="text-2xl font-bold font-playfair text-blue-900 dark:text-blue-100">{stat.value}</div>
                  <div className="flex items-center mt-1">
                    <FaArrowUp className="text-green-500 text-xs mr-1" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-poppins">{stat.change}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Traffic Overview Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50 mb-8"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 text-white">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <FaGlobe className="text-lg" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Traffic Overview</h3>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-poppins text-gray-700 dark:text-gray-300">{stat.label}</span>
                    <span className="font-bold font-poppins text-blue-900 dark:text-blue-100">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className={`${stat.color} h-2 rounded-full`} style={{ width: stat.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Device Breakdown Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 text-white">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <FaDesktop className="text-lg" />
              </div>
              <h3 className="text-lg font-bold font-playfair">Device Breakdown</h3>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-6">
              {[
                { device: "Desktop", percent: 65, icon: <FaDesktop /> },
                { device: "Mobile", percent: 30, icon: <FaMobileAlt /> },
                { device: "Tablet", percent: 5, icon: <FaTabletAlt /> }
              ].map((item, index) => (
                <div key={index} className="flex-1 min-w-[120px]">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-3">
                      {item.icon}
                    </div>
                    <span className="font-poppins text-gray-700 dark:text-gray-300">{item.device}</span>
                  </div>
                  <div className="text-2xl font-bold font-playfair text-blue-900 dark:text-blue-100">{item.percent}%</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Premium Analytics Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full text-sm font-poppins">
            <FaStar className="mr-2" />
            Premium Analytics Available
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileAnalytics;