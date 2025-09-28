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
    <section id="profile-analytics" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
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
            Profile Analytics
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        {/* Compact Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-teal-100 dark:border-teal-800 text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold font-playfair">{stat.value}</div>
              <div className="text-xs text-teal-600 dark:text-teal-400 font-poppins">{stat.title}</div>
              <div className="flex items-center justify-center mt-1">
                <FaArrowUp className="text-green-500 text-xs mr-1" />
                <span className="text-xs text-green-600 dark:text-green-400 font-poppins">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quick Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-teal-100 dark:border-teal-800 mb-8"
        >
          <h3 className="text-lg font-bold mb-4 font-poppins">Traffic Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-poppins">{stat.label}</span>
                  <span className="font-bold font-poppins">{stat.value}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className={`${stat.color} h-2 rounded-full`} style={{ width: stat.value }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Device Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-teal-100 dark:border-teal-800"
        >
          <h3 className="text-lg font-bold mb-4 font-poppins">Device Breakdown</h3>
          <div className="flex flex-wrap gap-6">
            {[
              { device: "Desktop", percent: 65, icon: <FaDesktop /> },
              { device: "Mobile", percent: 30, icon: <FaMobileAlt /> },
              { device: "Tablet", percent: 5, icon: <FaTabletAlt /> }
            ].map((item, index) => (
              <div key={index} className="flex-1 min-w-[120px]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-2">
                    {item.icon}
                  </div>
                  <span className="font-poppins">{item.device}</span>
                </div>
                <div className="text-xl font-bold font-playfair">{item.percent}%</div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Compact CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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