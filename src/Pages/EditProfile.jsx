// components/EditProfile.js
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUser, FaInfoCircle, FaBriefcase, FaGraduationCap, FaCode, FaProjectDiagram,
  FaCertificate, FaComments, FaBlog, FaYoutube, FaVideo, FaHeartbeat,
  FaPhoneAlt, FaFileAlt, FaCalendarAlt, FaChartBar, FaQrcode, FaEnvelope,
  FaCog, FaSave, FaSignOutAlt, FaMoon, FaSun, FaBars, FaTimes, FaArrowRight,
  FaEye, FaEdit, FaPlus, FaSearch, FaBell, FaUserCircle, FaChevronDown, FaChevronUp,
  FaThLarge, FaList, FaTachometerAlt, FaPalette, FaLock, FaDatabase, FaMountain,
  FaLeaf, FaTree, FaWater, FaStar, FaFire, FaBolt, FaGem, FaSnowflake, FaFeather,
  FaDragon, FaKiwiBird, FaHorse, FaFish, FaSpider, FaBug, FaCat, FaDog, FaCrow,
  FaIdCard, FaImages, FaImage, FaUsers, FaMoneyBill, FaMusic, FaFileSignature, FaUserMd,
  FaRocket, FaChartLine, FaLightbulb, FaTrophy, FaClock, FaGlobe, FaHeart, FaMedal
} from 'react-icons/fa';

import { Hero, About, Experience, Education, Skills, Gallery, Projects, Certifications, Testimonials, MyTeam, Blog, YouTube, Videos, Medical, EmergencyContact, Documents, ProfileAnalytics, PaymentQR, Family, Playlist } from "../Components/Profile/EditIndex";

const EditProfile = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [headerSearch, setHeaderSearch] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New message', description: 'You have a new message from Alex', time: '2 min ago', read: false },
    { id: 2, title: 'Profile view', description: 'Your profile was viewed 50 times today', time: '1 hour ago', read: true },
    { id: 3, title: 'Update available', description: 'New version of the admin panel is available', time: '3 hours ago', read: true }
  ]);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return savedMode === 'true';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const containerRef = useRef(null);

  // Apply dark mode class to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-gray-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark:bg-gray-900');
    }

    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Initialize theme on component mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('darkMode')) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1500);
  };

  const navigationItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: <FaTachometerAlt />,
      description: 'Overview and analytics',
      color: 'from-teal-400 to-cyan-500',
      accent: 'teal',
      natureIcon: <FaMountain />
    },
    {
      id: 'about',
      name: 'About',
      icon: <FaInfoCircle />,
      description: 'Personal information',
      color: 'from-blue-400 to-sky-500',
      accent: 'blue',
      natureIcon: <FaLeaf />
    },
    {
      id: 'hero',
      name: 'Hero Section',
      icon: <FaUser />,
      description: 'Main profile section',
      color: 'from-purple-400 to-indigo-500',
      accent: 'purple',
      natureIcon: <FaFeather />
    },

    {
      id: 'experience',
      name: 'Experience',
      icon: <FaBriefcase />,
      description: 'Work history',
      color: 'from-amber-400 to-orange-500',
      accent: 'amber',
      natureIcon: <FaTree />
    },
    {
      id: 'education',
      name: 'Education',
      icon: <FaGraduationCap />,
      description: 'Academic background',
      color: 'from-emerald-400 to-green-500',
      accent: 'green',
      natureIcon: <FaKiwiBird />
    },
    {
      id: 'skills',
      name: 'Skills',
      icon: <FaCode />,
      description: 'Technical abilities',
      color: 'from-rose-400 to-pink-500',
      accent: 'rose',
      natureIcon: <FaDragon />
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: <FaProjectDiagram />,
      description: 'Portfolio showcase',
      color: 'from-violet-400 to-purple-500',
      accent: 'violet',
      natureIcon: <FaHorse />
    },
    {
      id: 'certifications',
      name: 'Certifications',
      icon: <FaCertificate />,
      description: 'Professional credentials',
      color: 'from-cyan-400 to-sky-500',
      accent: 'cyan',
      natureIcon: <FaFish />
    },
    {
      id: 'testimonials',
      name: 'Testimonials',
      icon: <FaComments />,
      description: 'Client feedback',
      color: 'from-fuchsia-400 to-pink-500',
      accent: 'fuchsia',
      natureIcon: <FaSpider />
    },
    {
      id: 'team',
      name: 'My Team',
      icon: <FaUsers />,
      description: 'Team members',
      color: 'from-lime-400 to-green-500',
      accent: 'lime',
      natureIcon: <FaBug />
    },
    {
      id: 'blog',
      name: 'Blog',
      icon: <FaBlog />,
      description: 'Articles & posts',
      color: 'from-red-400 to-rose-500',
      accent: 'red',
      natureIcon: <FaCat />
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: <FaYoutube />,
      description: 'Video content',
      color: 'from-orange-400 to-amber-500',
      accent: 'orange',
      natureIcon: <FaDog />
    },
    {
      id: 'videos',
      name: 'Videos',
      icon: <FaVideo />,
      description: 'Video gallery',
      color: 'from-red-400 to-pink-500',
      accent: 'red',
      natureIcon: <FaCrow />
    },
    {
      id: 'medical',
      name: 'Medical',
      icon: <FaHeartbeat />,
      description: 'Health information',
      color: 'from-rose-400 to-pink-500',
      accent: 'rose',
      natureIcon: <FaHeartbeat />
    },
    {
      id: 'emergency',
      name: 'Emergency Contact',
      icon: <FaPhoneAlt />,
      description: 'Emergency contacts',
      color: 'from-blue-400 to-sky-500',
      accent: 'blue',
      natureIcon: <FaPhoneAlt />
    },
    {
      id: 'documents',
      name: 'Documents',
      icon: <FaFileAlt />,
      description: 'Important files',
      color: 'from-indigo-400 to-purple-500',
      accent: 'indigo',
      natureIcon: <FaFileAlt />
    },
    {
      id: 'analytics',
      name: 'Profile Analytics',
      icon: <FaChartBar />,
      description: 'Profile statistics',
      color: 'from-emerald-400 to-green-500',
      accent: 'emerald',
      natureIcon: <FaChartBar />
    },
    {
      id: 'payment',
      name: 'Payment QR',
      icon: <FaQrcode />,
      description: 'Payment options',
      color: 'from-teal-400 to-cyan-500',
      accent: 'teal',
      natureIcon: <FaQrcode />
    },
    {
      id: 'gallery',
      name: 'Image Gallery',
      icon: <FaImages />,
      description: 'Photo collection',
      color: 'from-purple-400 to-indigo-500',
      accent: 'purple',
      natureIcon: <FaImages />
    },
    {
      id: 'family',
      name: 'Family Members',
      icon: <FaUsers />,
      description: 'Family information',
      color: 'from-green-400 to-emerald-500',
      accent: 'green',
      natureIcon: <FaUsers />
    },
    {
      id: 'playlist',
      name: 'Playlist/Inspirations',
      icon: <FaMusic />,
      description: 'Favorite content',
      color: 'from-indigo-400 to-purple-500',
      accent: 'indigo',
      natureIcon: <FaMusic />
    }
  ];

  const filteredItems = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-blue-500/20 dark:from-teal-900/30 dark:via-cyan-900/30 dark:to-blue-900/30"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-20"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/30 to-indigo-500/30 rounded-full filter blur-3xl"></div>
              </div>

              <div className="relative z-10 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-8 md:mb-0 md:mr-8">
                    <motion.h1
                      className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      Welcome Back, <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">John!</span>
                    </motion.h1>
                    <motion.p
                      className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      Here's what's happening with your profile today.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center">
                        <FaRocket className="mr-2" /> View Profile
                      </button>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="User Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <FaTrophy size={24} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Profile Views',
                  value: '1,248',
                  change: '+12%',
                  icon: <FaUser className="text-teal-400" />,
                  color: 'teal',
                  description: 'from last month',
                  progress: 75,
                  bgGradient: 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20'
                },
                {
                  title: 'Projects',
                  value: '24',
                  change: '+3',
                  icon: <FaProjectDiagram className="text-purple-400" />,
                  color: 'purple',
                  description: 'in progress',
                  progress: 60,
                  bgGradient: 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
                },
                {
                  title: 'Messages',
                  value: '18',
                  change: '+5',
                  icon: <FaComments className="text-amber-400" />,
                  color: 'amber',
                  description: 'unread',
                  progress: 45,
                  bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20'
                },
                {
                  title: 'Revenue',
                  value: '$4,286',
                  change: '+8%',
                  icon: <FaGem className="text-emerald-400" />,
                  color: 'emerald',
                  description: 'from last month',
                  progress: 85,
                  bgGradient: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${stat.bgGradient} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden shadow-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mr-3 shadow-sm">
                        {stat.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{stat.title}</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</p>
                    <div className="flex items-center text-green-500 dark:text-green-400 text-sm mb-3">
                      <FaArrowRight className="mr-1 rotate-45" />
                      <span>{stat.change} {stat.description}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${stat.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Profile Analytics</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white text-sm">Day</button>
                    <button className="px-3 py-1 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg text-sm">Week</button>
                    <button className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white text-sm">Month</button>
                  </div>
                </div>

                <div className="h-64 flex items-end justify-between">
                  {[40, 80, 60, 120, 90, 140, 100, 160, 130, 180, 150, 200].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}px` }}
                      transition={{ delay: index * 0.05, duration: 0.5, type: "spring" }}
                      className="w-8 bg-gradient-to-t from-teal-400 to-cyan-500 rounded-t-lg relative"
                      whileHover={{ height: `${height + 20}px` }}
                    >
                      <motion.div
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity"
                      >
                        {height} views
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                    <span key={index}>{month}</span>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Recent Activity</h3>
                  <button className="text-teal-600 dark:text-teal-400 text-sm">View All</button>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: <FaMountain className="text-teal-400" />, title: 'Updated Hero section', time: '2 hours ago', user: 'You' },
                    { icon: <FaProjectDiagram className="text-purple-400" />, title: 'Added new project', time: 'Yesterday', user: 'You' },
                    { icon: <FaBlog className="text-blue-400" />, title: 'Published blog post', time: '3 days ago', user: 'You' },
                    { icon: <FaUsers className="text-emerald-400" />, title: 'Added team member', time: '1 week ago', user: 'You' }
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mr-3 shadow-sm">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 dark:text-white font-medium">{activity.title}</p>
                        <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm">
                          <span>{activity.user}</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nature Elements Section */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Nature Elements</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'}`}
                  >
                    <FaThLarge />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'}`}
                  >
                    <FaList />
                  </button>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  {navigationItems.slice(0, 8).map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl cursor-pointer"
                      onClick={() => setActiveSection(item.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="text-2xl text-gray-800 dark:text-white mb-2">{item.natureIcon}</div>
                      <span className="text-gray-800 dark:text-white text-xs text-center">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {navigationItems.slice(0, 5).map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl cursor-pointer"
                      onClick={() => setActiveSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center mr-4">
                        <div className="text-xl text-gray-800 dark:text-white">{item.natureIcon}</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Quick Actions</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <FaPlus />, label: 'Add New', color: 'teal' },
                  { icon: <FaEdit />, label: 'Edit Profile', color: 'purple' },
                  { icon: <FaEye />, label: 'Preview', color: 'blue' },
                  { icon: <FaSave />, label: 'Save All', color: 'emerald' }
                ].map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${action.color}-100 to-${action.color}-200 dark:from-${action.color}-900/30 dark:to-${action.color}-800/30 flex items-center justify-center mb-3`}>
                      <div className={`text-${action.color}-600 dark:text-${action.color}-400 text-2xl`}>{action.icon}</div>
                    </div>
                    <span className="text-gray-800 dark:text-white text-sm">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Profile Completion',
                  value: '85%',
                  icon: <FaChartLine className="text-teal-400" />,
                  description: 'Almost there!',
                  items: ['Basic Info', 'Contact Details', 'Social Links', 'Portfolio']
                },
                {
                  title: 'Engagement Rate',
                  value: '4.2%',
                  icon: <FaHeart className="text-rose-400" />,
                  description: 'Above average',
                  items: ['Likes', 'Comments', 'Shares', 'Saves']
                },
                {
                  title: 'Growth Rate',
                  value: '12.5%',
                  icon: <FaRocket className="text-purple-400" />,
                  description: 'Excellent!',
                  items: ['Followers', 'Views', 'Connections', 'Opportunities']
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                      {metric.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{metric.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{metric.description}</p>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{metric.value}</div>

                  <div className="space-y-2">
                    {metric.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'hero':
        return <Hero darkMode={darkMode} />;
      case 'about':
        return <About darkMode={darkMode} />;
      case 'experience':
        return <Experience darkMode={darkMode} />;
      case 'education':
        return <Education darkMode={darkMode} />;
      case 'skills':
        return <Skills darkMode={darkMode} />;
      case 'gallery':
        return <Gallery darkMode={darkMode} />;
      case 'projects':
        return <Projects darkMode={darkMode} />;
      case 'certifications':
        return <Certifications darkMode={darkMode} />;
      case 'testimonials':
        return <Testimonials darkMode={darkMode} />;
      case 'team':
        return <MyTeam darkMode={darkMode} />;
      case 'blog':
        return <Blog darkMode={darkMode} />;
      case 'youtube':
        return <YouTube darkMode={darkMode} />;
      case 'videos':
        return <Videos darkMode={darkMode} />;
      case 'medical':
        return <Medical darkMode={darkMode} />;
      case 'emergency':
        return <EmergencyContact darkMode={darkMode} />;
      case 'documents':
        return <Documents darkMode={darkMode} />;
      case 'analytics':
        return <ProfileAnalytics darkMode={darkMode} />;
      case 'payment':
        return <PaymentQR darkMode={darkMode} />;
      case 'family':
        return <Family darkMode={darkMode} />;
      case 'playlist':
        return <Playlist darkMode={darkMode} />;
      default:
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white capitalize">{activeSection} Editor</h2>
              <button className="px-4 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center">
                <FaEye className="mr-2" /> Preview
              </button>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex flex-col items-center justify-center py-12">
                <motion.div
                  className="w-24 h-24 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 flex items-center justify-center mb-6 overflow-hidden"
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/a-/AFdZucqvdT7Z7XJf3Z7XJz7Z7XJz7Z7XJz7Z7XJz7Z7XJ=s96-c"
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{activeSection} Section</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
                  This section editor is under development. You'll be able to customize your {activeSection} content here soon.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
                  <motion.div
                    className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -10 }}
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h4>
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center">
                      <FaPlus className="mr-2" /> Add New
                    </button>
                  </motion.div>

                  <motion.div
                    className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -10 }}
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h4>
                    <p className="text-gray-600 dark:text-gray-400">No recent activity</p>
                  </motion.div>

                  <motion.div
                    className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -10 }}
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Statistics</h4>
                    <p className="text-gray-600 dark:text-gray-400">No data available</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`} ref={containerRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <Helmet>
        <title>Admin Panel | John Doe</title>
        <meta name="description" content="Admin panel for managing your profile" />
      </Helmet>

      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-xl`}>
        {/* Creative Sidebar Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-cyan-500/10 dark:from-teal-900/20 dark:to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-10"></div>
          <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-indigo-500/20 rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Logo and user info */}
          <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center mb-6">
              <motion.div
                className="w-12 h-12 rounded-xl overflow-hidden mr-4 shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">Admin Panel</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">John Doe</p>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
              <FaSearch className="absolute right-4 top-3.5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-2">
              {filteredItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all relative overflow-hidden ${activeSection === item.id
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                    }`}
                >
                  {/* Animated background for active item */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}

                  <span className="mr-3 text-lg z-10">{item.icon}</span>
                  <div className="text-left z-10">
                    <div>{item.name}</div>
                    <div className="text-xs opacity-70">{item.description}</div>
                  </div>

                  {/* Hover effect */}
                  {hoveredItem === item.id && activeSection !== item.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="ml-auto w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 z-10"
                    />
                  )}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Bottom actions */}
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center px-4 py-3 mb-3 text-sm font-medium rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <><FaSun className="mr-2" /> Light Mode</> : <><FaMoon className="mr-2" /> Dark Mode</>}
            </button>

            <button className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <div className="lg:ml-64 min-h-screen relative z-10">
        {/* Creative Header */}
        <header className="sticky top-0 z-20">
          {/* Animated Header Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 dark:from-teal-900/20 dark:to-cyan-900/20"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 gap-4">
              <div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white capitalize">
                  {activeSection === 'dashboard' ? 'Dashboard' : activeSection}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activeSection === 'dashboard'
                    ? 'Overview of your profile and activity'
                    : `Manage your ${activeSection} section`}
                </p>
              </div>

              {/* Creative Search Bar */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search anything..."
                  value={headerSearch}
                  onChange={(e) => setHeaderSearch(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-full border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent pl-10"
                />
                <FaSearch className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" />
                <button className="absolute right-2 top-1.5 p-1 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-7 h-7 flex items-center justify-center">
                  <FaArrowRight className="text-xs" />
                </button>
              </div>

              {/* Creative Profile Section */}
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <button className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors relative shadow-sm">
                    <FaBell />
                    {notifications.some(n => !n.read) && (
                      <motion.span
                        className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible hover:opacity-100 hover:visible transition-all duration-300 transform origin-top-right">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-800 dark:text-white">Notifications</h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map(notification => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer ${!notification.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
                        >
                          <div className="flex">
                            <div className="mr-3 mt-1">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center text-white">
                                <FaBell size={14} />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-800 dark:text-white">{notification.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{notification.description}</p>
                              <div className="flex justify-between mt-1">
                                <span className="text-xs text-gray-500 dark:text-gray-500">{notification.time}</span>
                                {!notification.read && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">New</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center">
                      <button className="text-sm text-teal-600 dark:text-teal-400 font-medium">View All Notifications</button>
                    </div>
                  </div>
                </div>

                {/* Profile Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 hover:from-teal-100 hover:to-cyan-100 dark:hover:from-teal-800/50 dark:hover:to-cyan-800/50 transition-all shadow-sm">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="User Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-gray-800 dark:text-white">John Doe</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Admin</p>
                    </div>
                    <FaChevronDown className="text-gray-800 dark:text-white text-xs" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="User Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-gray-800 dark:text-white font-medium">John Doe</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Full Stack Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center">
                          <FaUser className="mr-3 text-gray-500" />
                          <span>View Profile</span>
                        </div>
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center">
                          <FaCog className="mr-3 text-gray-500" />
                          <span>Account Settings</span>
                        </div>
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center">
                          <FaPalette className="mr-3 text-gray-500" />
                          <span>Customize Theme</span>
                        </div>
                      </button>
                      <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center">
                          <FaSignOutAlt className="mr-3 text-gray-500" />
                          <span>Logout</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="p-4 lg:p-8">
          {renderSection()}
        </main>

        {/* Footer */}
        <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 p-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© 2023 John Doe. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </footer>
      </div>

      {/* Save Success Notification */}
      <AnimatePresence>
        {saveSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 px-6 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-xl shadow-lg"
          >
            <div className="flex items-center">
              <FaSave className="mr-3" />
              <span>Changes saved successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EditProfile;