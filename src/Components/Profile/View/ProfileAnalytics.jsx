// components/ProfileAnalytics.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaUsers, FaChartLine, FaGlobe, FaMobileAlt, FaDesktop, FaTabletAlt,FaWater, FaFish } from 'react-icons/fa';

const ProfileAnalytics = () => {
  const stats = [
    {
      id: 1,
      title: "Profile Views",
      value: "12,486",
      change: "+12%",
      icon: <FaEye className="text-cyan-500" />,
      description: "Total views in the last 30 days"
    },
    {
      id: 2,
      title: "Unique Visitors",
      value: "8,942",
      change: "+8%",
      icon: <FaUsers className="text-blue-500" />,
      description: "Distinct visitors in the last 30 days"
    },
    {
      id: 3,
      title: "Engagement Rate",
      value: "68%",
      change: "+5%",
      icon: <FaChartLine className="text-teal-500" />,
      description: "Average time spent on profile"
    },
    {
      id: 4,
      title: "Contact Requests",
      value: "247",
      change: "+15%",
      icon: <FaGlobe className="text-indigo-500" />,
      description: "New inquiries in the last 30 days"
    }
  ];

  const trafficSources = [
    { source: "Direct", percentage: 45, color: "bg-cyan-500" },
    { source: "Social Media", percentage: 25, color: "bg-blue-500" },
    { source: "Search Engines", percentage: 20, color: "bg-teal-500" },
    { source: "Referrals", percentage: 10, color: "bg-indigo-500" }
  ];

  const deviceStats = [
    { device: "Desktop", percentage: 65, icon: <FaDesktop className="text-xl" /> },
    { device: "Mobile", percentage: 30, icon: <FaMobileAlt className="text-xl" /> },
    { device: "Tablet", percentage: 5, icon: <FaTabletAlt className="text-xl" /> }
  ];

  return (
    <section id="profile-analytics" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 relative overflow-hidden">
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
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
              className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600"
            ></motion.div>
          </div>
          
          <div className="flex items-center gap-2 text-sm bg-cyan-100 dark:bg-cyan-900/30 px-4 py-2 rounded-lg font-poppins">
            <span>Powered by</span>
            <span className="font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">TouchYatra</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-blue-100 dark:border-blue-800"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium font-poppins ${
                  stat.change.startsWith('+') 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}>
                  {stat.change}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-1 font-poppins">{stat.value}</h3>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm font-poppins">{stat.title}</p>
              <p className="text-cyan-500 dark:text-cyan-500 text-xs mt-2 font-poppins">{stat.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-blue-100 dark:border-blue-800">
            <h3 className="text-xl font-bold mb-6 font-playfair flex items-center">
              <FaWater className="mr-2 text-blue-500" />
              Traffic Sources
            </h3>
            
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium font-poppins">{source.source}</span>
                    <span className="font-poppins">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2.5">
                    <div 
                      className={`${source.color} h-2.5 rounded-full`} 
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-blue-100 dark:border-blue-800">
            <h3 className="text-xl font-bold mb-6 font-playfair flex items-center">
              <FaWater className="mr-2 text-blue-500" />
              Device Statistics
            </h3>
            
            <div className="space-y-6">
              {deviceStats.map((device, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mr-3">
                        {device.icon}
                      </div>
                      <span className="font-medium font-poppins">{device.device}</span>
                    </div>
                    <span className="font-bold font-poppins">{device.percentage}%</span>
                  </div>
                  
                  <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2.5 rounded-full" 
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 font-poppins">Need Detailed Analytics?</h3>
              <p className="font-poppins">Upgrade to TouchYatra Premium for advanced insights and reporting.</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors font-poppins"
            >
              Upgrade Now
            </motion.button>
          </div>
          
          {/* Decorative fish */}
          <motion.div 
            animate={{ x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 15 }}
            className="absolute bottom-8 right-8 text-white/20"
          >
            <FaFish className="text-4xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileAnalytics;