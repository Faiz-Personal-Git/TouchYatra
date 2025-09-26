// components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, 
  FaTwitter, FaInstagram, FaFacebook, FaSnapchat, FaGlobe, FaMapMarkedAlt 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      value: "john@example.com",
      link: "mailto:john@example.com"
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,+CA"
    }
  ];

  const socialMedia = [
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      link: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      link: "https://linkedin.com",
      color: "hover:text-blue-700"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      link: "https://twitter.com",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      name: "Instagram",
      link: "https://instagram.com",
      color: "hover:text-pink-600"
    },
    {
      icon: <FaFacebook className="text-xl" />,
      name: "Facebook",
      link: "https://facebook.com",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaSnapchat className="text-xl" />,
      name: "Snapchat",
      link: "https://snapchat.com",
      color: "hover:text-yellow-500"
    },
    {
      icon: <FaGlobe className="text-xl" />,
      name: "Microsoft Teams",
      link: "https://teams.microsoft.com",
      color: "hover:text-purple-600"
    },
    {
      icon: <FaGlobe className="text-xl" />,
      name: "Website",
      link: "https://johndoe.dev",
      color: "hover:text-emerald-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-5 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-5 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-2 font-display"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6 font-display"
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-6 mb-10">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-4 flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 font-sans">{method.label}</h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-sans">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="font-bold mb-4 font-display">Follow Me</h4>
                <div className="grid grid-cols-4 gap-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-md transition-all duration-300"
                    >
                      <span className={social.color}>
                        {social.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white"
              >
                <h4 className="font-bold mb-2 font-display">Have a project in mind?</h4>
                <p className="mb-4 font-sans">I'm available for freelance work and collaborations. Let's discuss how we can work together.</p>
                <a 
                  href="#meeting-request" 
                  className="inline-flex items-center px-4 py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-gray-100 transition-colors font-sans"
                >
                  Schedule a Meeting
                </a>
              </motion.div>
            </div>
            
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
              >
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-4"
                    >
                      <FaPaperPlane className="text-2xl" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 font-display">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-sans">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-sans" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 font-sans"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-sans" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 font-sans"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-sans" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 font-sans"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-sans" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 font-sans"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium font-sans flex items-center justify-center"
                    >
                      Send Message <FaPaperPlane className="ml-2" />
                    </motion.button>
                  </form>
                )}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-bold mb-4 font-display flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-emerald-500" />
                  Find Me on Google Maps
                </h4>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192843494854!2d-122.41941848468199!3d37.77492977975902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1629799234150!5m2!1sen!2sus" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <a 
                  href="https://maps.google.com/?q=San+Francisco,+CA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-emerald-600 dark:text-emerald-400 hover:underline font-sans"
                >
                  View on Google Maps
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;