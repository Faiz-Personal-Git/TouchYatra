 
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaShareAlt, FaUserPlus, FaArrowRight, FaYoutube, FaTiktok, FaDiscord, FaTelegram, FaDribbble, FaBehance, FaMedium, FaPlus, FaTrash, FaSave, FaEye, FaTimes, FaCloudUploadAlt, FaImage, FaTimesCircle } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  // State for hero details (main table)
  const [heroDetails, setHeroDetails] = useState({
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    firstName: "Alex",
    lastName: "Johnson",
    gradientFrom: "from-teal-300",
    gradientTo: "to-blue-300",
    roles: "",
    description: "I create exceptional digital experiences that blend creativity with functionality. With expertise in modern web technologies, I build responsive and user-friendly applications that solve real-world problems. Passionate about clean code, intuitive design, and continuous learning.",
    availableForWork: "",
    profileFile: null,
    backgroundFile: null,
  });

  // State for social links (separate table)
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, icon: 'FaGithub', url: "https://github.com", color: "hover:text-white" },
    { id: 2, icon: 'FaLinkedin', url: "https://linkedin.com", color: "hover:text-blue-300" },
    { id: 3, icon: 'FaTwitter', url: "https://twitter.com", color: "hover:text-cyan-300" },
    { id: 4, icon: 'FaInstagram', url: "https://instagram.com", color: "hover:text-pink-300" },
    { id: 5, icon: 'FaFacebook', url: "https://facebook.com", color: "hover:text-blue-400" },
    { id: 6, icon: 'FaYoutube', url: "https://youtube.com", color: "hover:text-red-400" },
    { id: 7, icon: 'FaTiktok', url: "https://tiktok.com", color: "hover:text-pink-400" },
    { id: 8, icon: 'FaDiscord', url: "https://discord.com", color: "hover:text-indigo-400" },
    { id: 9, icon: 'FaTelegram', url: "https://telegram.com", color: "hover:text-blue-400" }
  ]);

  // UI state
  const [previewImage, setPreviewImage] = useState(null);
  const [activeTab, setActiveTab] = useState('details'); // 'details' or 'social'
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [dragActive, setDragActive] = useState({ profile: false, background: false });
  
  const profileInputRef = useRef(null);
  const backgroundInputRef = useRef(null);

  // Available icons for social links
  const iconOptions = [
    { value: 'FaGithub', label: 'GitHub', icon: <FaGithub /> },
    { value: 'FaLinkedin', label: 'LinkedIn', icon: <FaLinkedin /> },
    { value: 'FaTwitter', label: 'Twitter', icon: <FaTwitter /> },
    { value: 'FaInstagram', label: 'Instagram', icon: <FaInstagram /> },
    { value: 'FaFacebook', label: 'Facebook', icon: <FaFacebook /> },
    { value: 'FaYoutube', label: 'YouTube', icon: <FaYoutube /> },
    { value: 'FaTiktok', label: 'TikTok', icon: <FaTiktok /> },
    { value: 'FaDiscord', label: 'Discord', icon: <FaDiscord /> },
    { value: 'FaTelegram', label: 'Telegram', icon: <FaTelegram /> },
    { value: 'FaDribbble', label: 'Dribbble', icon: <FaDribbble /> },
    { value: 'FaBehance', label: 'Behance', icon: <FaBehance /> },
    { value: 'FaMedium', label: 'Medium', icon: <FaMedium /> }
  ];

  const availabilityOptions = [
    { value: "Available", label: "Available for work" },
    { value: "Not_Available", label: "Not available" },
    { value: "Open_To_Offers", label: "Open to offers" },
    { value: "Freelancing", label: "Available for freelance" },
    { value: "Looking", label: "Actively looking" },
    { value: "Busy", label: "Currently busy" },
  ];

  // Handle hero detail changes
  const handleDetailChange = (field, value) => {
    setHeroDetails(prev => ({ ...prev, [field]: value }));
  };

  // Handle social link changes
  const handleSocialLinkChange = (id, field, value) => {
    setSocialLinks(prev => 
      prev.map(link => link.id === id ? { ...link, [field]: value } : link)
    );
  };

  // Add new social link
  const addSocialLink = () => {
    const newId = Math.max(0, ...socialLinks.map(link => link.id)) + 1;
    setSocialLinks(prev => [...prev, { id: newId, icon: 'FaGithub', url: "", color: "hover:text-white" }]);
    showNotification('New social link added');
  };

  // Remove social link
  const removeSocialLink = (id) => {
    setSocialLinks(prev => prev.filter(link => link.id !== id));
    showNotification('Social link removed', 'info');
  };

  // Handle drag events
  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(prev => ({ ...prev, [type]: true }));
    } else if (e.type === "dragleave") {
      setDragActive(prev => ({ ...prev, [type]: false }));
    }
  };

  // Handle drop events
  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [type]: false }));
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0], type);
    }
  };

  // Handle file selection
  const handleFile = (file, type) => {
    if (!file.type.match('image.*')) {
      showNotification('Please select an image file', 'error');
      return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === 'profile') {
        setHeroDetails(prev => ({ 
          ...prev, 
          profileImage: reader.result, 
          profileFile: file 
        }));
      } else {
        setHeroDetails(prev => ({ 
          ...prev, 
          backgroundImage: reader.result, 
          backgroundFile: file 
        }));
      }
      showNotification(`${type === 'profile' ? 'Profile' : 'Background'} image updated`);
    };
    reader.readAsDataURL(file);
  };

  // Trigger file input click
  const openFileDialog = (type) => {
    if (type === 'profile') {
      profileInputRef.current.click();
    } else {
      backgroundInputRef.current.click();
    }
  };

  // Handle file input change
  const handleFileInputChange = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0], type);
    }
  };

  // Remove uploaded image
  const removeImage = (type) => {
    if (type === 'profile') {
      setHeroDetails(prev => ({ 
        ...prev, 
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        profileFile: null 
      }));
    } else {
      setHeroDetails(prev => ({ 
        ...prev, 
        backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        backgroundFile: null 
      }));
    }
    showNotification(`${type === 'profile' ? 'Profile' : 'Background'} image removed`, 'info');
  };

  // Handle availability change
  const handleAvailabilityChange = (e) => {
    const { value } = e.target;
    setHeroDetails(prev => ({ ...prev, availableForWork: value }));
  };

  // Save hero details
  const saveHeroDetails = () => {
    // In a real app, this would be an API call
    console.log('Saving hero details:', heroDetails);
    showNotification('Hero details saved successfully');
  };

  // Save social links
  const saveSocialLinks = () => {
    // In a real app, this would be an API call
    console.log('Saving social links:', socialLinks);
    showNotification('Social links saved successfully');
  };
  
  // Theme classes
  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const containerBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-200' : 'text-gray-800';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const labelClass = darkMode ? 'text-gray-300' : 'text-gray-700';
  const borderClass = darkMode ? 'border-gray-600' : 'border-gray-300';
  const inputBgClass = darkMode ? 'bg-gray-700' : 'bg-white';
  const inputBorderClass = darkMode ? 'border-gray-600' : 'border-gray-300';
  const inputFocusClass = darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-500';
  const buttonBgClass = darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600';
  const iconBgClass = darkMode ? 'bg-gray-700' : 'bg-gray-200';
  const redTextClass = darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-700';
  const tabActiveClass = darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white';
  const tabInactiveClass = darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700';
  const dragActiveClass = darkMode ? 'border-blue-500 bg-blue-900/20' : 'border-blue-400 bg-blue-100';
  const dragInactiveClass = darkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-300 bg-gray-100';

  return (
    <div className={`min-h-screen p-6 ${bgClass}`}>
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg z-50 ${
          notification.type === 'success' ? 'bg-green-500' : 
          notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}>
          {notification.message}
        </div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setPreviewImage(null)}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <img src={previewImage} alt="Full View" className="w-full h-auto rounded-lg shadow-lg" />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full px-2"
              onClick={() => setPreviewImage(null)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      <div className={`max-w-6xl mx-auto rounded-xl shadow-md overflow-hidden ${containerBgClass}`}>
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className={`text-3xl font-bold ${textClass}`}>Edit Hero Section</h1>
            <p className={`${textSecondaryClass} mt-2`}>Customize your homepage hero section</p>
          </motion.div>

          {/* Tabs for different sections */}
          <div className="flex mb-6 border-b">
            <button
              className={`px-4 py-2 font-medium rounded-t-lg ${
                activeTab === 'details' ? tabActiveClass : tabInactiveClass
              }`}
              onClick={() => setActiveTab('details')}
            >
              Hero Details
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-t-lg ${
                activeTab === 'social' ? tabActiveClass : tabInactiveClass
              }`}
              onClick={() => setActiveTab('social')}
            >
              Social Links
            </button>
          </div>

          {/* Hero Details Tab */}
          {activeTab === 'details' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Images */}
                <div className="space-y-8">
                  {/* Profile Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className={`p-6 rounded-lg ${cardBgClass}`}
                  >
                    <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>Profile Image</h2>
                    
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-500">
                          <img
                            onClick={() => setPreviewImage(heroDetails.profileImage)}
                            src={heroDetails.profileImage}
                            alt="Profile Preview"
                            className="w-full h-full object-cover cursor-pointer"
                          />
                        </div>
                        <button
                          onClick={() => removeImage('profile')}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <FaTimesCircle />
                        </button>
                      </div>
                      
                      <div 
                        className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all ${
                          dragActive.profile ? dragActiveClass : dragInactiveClass
                        }`}
                        onDragEnter={(e) => handleDrag(e, 'profile')}
                        onDragOver={(e) => handleDrag(e, 'profile')}
                        onDragLeave={(e) => handleDrag(e, 'profile')}
                        onDrop={(e) => handleDrop(e, 'profile')}
                        onClick={() => openFileDialog('profile')}
                      >
                        <FaCloudUploadAlt className={`mx-auto h-10 w-10 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                        <p className={`mt-2 text-sm ${textClass}`}>
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className={`text-xs ${textSecondaryClass} mt-1`}>
                          PNG, JPG, GIF up to 10MB
                        </p>
                        <input
                          ref={profileInputRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileInputChange(e, "profile")}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Background Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`p-6 rounded-lg ${cardBgClass}`}
                  >
                    <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>Background Image</h2>
                    
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4 w-full">
                        <div className="w-full h-48 rounded-lg overflow-hidden border-4 border-teal-500">
                          <img
                            onClick={() => setPreviewImage(heroDetails.backgroundImage)}
                            src={heroDetails.backgroundImage}
                            alt="Background Preview"
                            className="w-full h-full object-cover cursor-pointer"
                          />
                        </div>
                        <button
                          onClick={() => removeImage('background')}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <FaTimesCircle />
                        </button>
                      </div>
                      
                      <div 
                        className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all ${
                          dragActive.background ? dragActiveClass : dragInactiveClass
                        }`}
                        onDragEnter={(e) => handleDrag(e, 'background')}
                        onDragOver={(e) => handleDrag(e, 'background')}
                        onDragLeave={(e) => handleDrag(e, 'background')}
                        onDrop={(e) => handleDrop(e, 'background')}
                        onClick={() => openFileDialog('background')}
                      >
                        <FaCloudUploadAlt className={`mx-auto h-10 w-10 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                        <p className={`mt-2 text-sm ${textClass}`}>
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className={`text-xs ${textSecondaryClass} mt-1`}>
                          PNG, JPG, GIF up to 10MB
                        </p>
                        <input
                          ref={backgroundInputRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileInputChange(e, "background")}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Text Fields */}
                <div className="space-y-8">
                  {/* Name and Status */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className={`p-6 rounded-lg ${cardBgClass}`}
                  >
                    <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>Name & Status</h2>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${labelClass}`}>First Name</label>
                        <input
                          type="text"
                          value={heroDetails.firstName}
                          onChange={(e) => handleDetailChange('firstName', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputBgClass} ${inputBorderClass} ${inputFocusClass} ${textClass}`}
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-1 ${labelClass}`}>Last Name</label>
                        <input
                          type="text"
                          value={heroDetails.lastName}
                          onChange={(e) => handleDetailChange('lastName', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputBgClass} ${inputBorderClass} ${inputFocusClass} ${textClass}`}
                        />
                      </div>
                    </div>

                    <h3 className={`text-lg font-medium mb-3 ${textClass}`}>Availability Status</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {availabilityOptions.map((item) => (
                        <label
                          key={item.value}
                          className="inline-flex items-center text-sm cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="availability"
                            value={item.value}
                            checked={heroDetails.availableForWork === item.value}
                            onChange={handleAvailabilityChange}
                            className="cursor-pointer w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                          />
                          <span className={`ml-2 ${textClass}`}>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  {/* Roles */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`p-6 rounded-lg ${cardBgClass}`}
                  >
                    <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>Roles (Typewriter)</h2>
                    <input
                      type="text"
                      value={heroDetails.roles}
                      onChange={(e) => handleDetailChange("roles", e.target.value)}
                      placeholder="e.g. Developer, Designer, Creator"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputBgClass} ${inputBorderClass} ${inputFocusClass} ${textClass}`}
                    />
                    <p className={`text-sm mt-2 ${textSecondaryClass}`}>
                      Separate multiple roles with commas
                    </p>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={`p-6 rounded-lg ${cardBgClass}`}
                  >
                    <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>Description</h2>
                    <textarea
                      value={heroDetails.description}
                      onChange={(e) => handleDetailChange('description', e.target.value)}
                      rows={4}
                      placeholder="Write a brief description about yourself..."
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputBgClass} ${inputBorderClass} ${inputFocusClass} ${textClass}`}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Save Button for Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 flex justify-end"
              >
                <button
                  onClick={saveHeroDetails}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <FaSave className="mr-2" />
                  Save Hero Details
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Social Links Tab */}
          {activeTab === 'social' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`p-6 rounded-lg ${cardBgClass}`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-xl font-semibold ${textClass}`}>Social Links</h2>
                  <button
                    onClick={addSocialLink}
                    className={`flex items-center px-4 py-2 rounded-md transition-colors ${buttonBgClass} text-white`}
                  >
                    <FaPlus className="mr-2" />
                    Add Link
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${textClass}`}>Platform</th>
                        <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${textClass}`}>URL</th>
                        <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${textClass}`}>Preview</th>
                        <th className={`px-4 py-3 text-right text-xs font-medium uppercase tracking-wider ${textClass}`}>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {socialLinks.map((link) => (
                        <tr key={link.id}>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <select
                              value={link.icon}
                              onChange={(e) => handleSocialLinkChange(link.id, 'icon', e.target.value)}
                              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputBgClass} ${inputBorderClass} ${inputFocusClass} ${textClass}`}
                            >
                              {iconOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="px-4 py-3">
                            <input
                              type="text"
                              value={link.url}
                              onChange={(e) => handleSocialLinkChange(link.id, 'url', e.target.value)}
                              placeholder="https://example.com"
                              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${inputBgClass} ${inputBorderClass} ${inputFocusClass} ${textClass}`}
                            />
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBgClass}`}>
                                {iconOptions.find(opt => opt.value === link.icon)?.icon || <FaGithub />}
                              </div>
                              <span className={`ml-2 text-sm ${textClass}`}>
                                {iconOptions.find(opt => opt.value === link.icon)?.label || 'GitHub'}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right">
                            <button
                              onClick={() => removeSocialLink(link.id)}
                              className={`p-2 rounded-md ${redTextClass}`}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {socialLinks.length === 0 && (
                  <div className="text-center py-8">
                    <p className={`${textSecondaryClass}`}>No social links added yet</p>
                    <button
                      onClick={addSocialLink}
                      className={`mt-4 flex items-center justify-center px-4 py-2 rounded-md transition-colors ${buttonBgClass} text-white mx-auto`}
                    >
                      <FaPlus className="mr-2" />
                      Add Your First Link
                    </button>
                  </div>
                )}
              </div>

              {/* Save Button for Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 flex justify-end"
              >
                <button
                  onClick={saveSocialLinks}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <FaSave className="mr-2" />
                  Save Social Links
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;