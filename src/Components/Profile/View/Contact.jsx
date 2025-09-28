// components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaMapMarkedAlt, FaShieldAlt, FaCheckCircle
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
      value: "Ambala, Haryana, India",
      link: "https://maps.google.com/?q=Ambala,+Haryana,+India"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
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
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-playfair">Contact Me</h3>
                    <p className="text-xs text-teal-100 font-poppins">I'll get back to you as soon as possible</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaShieldAlt className="mr-2" />
                  <span className="text-sm font-poppins">Secure & Private</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Contact Information Section */}
                <div className="md:w-2/5 flex flex-col">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-5 rounded-2xl border border-teal-200 dark:border-teal-700 mb-5 w-full">
                    <h3 className="text-lg font-bold mb-4 font-playfair">Contact Information</h3>
                    
                    <div className="space-y-4">
                      {contactMethods.map((method, index) => (
                        <motion.a
                          key={index}
                          href={method.link}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start group"
                        >
                          <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0 shadow-sm">
                            {method.icon}
                          </div>
                          <div>
                            <h4 className="font-bold mb-1 font-poppins">{method.label}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors font-poppins">
                              {method.value}
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-4 text-white">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <FaPaperPlane className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold font-poppins">Have a project in mind?</h4>
                        <p className="text-xs text-teal-100 font-poppins">Let's discuss how we can work together</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form Section */}
                <div className="md:w-3/5">
                  <h3 className="text-lg font-bold mb-4 font-playfair">Send a Message</h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mx-auto mb-4">
                        <FaCheckCircle className="text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 font-playfair">Message Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-poppins">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 mb-1 font-poppins text-sm" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 dark:bg-gray-700 font-poppins text-sm"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 mb-1 font-poppins text-sm" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 dark:bg-gray-700 font-poppins text-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1 font-poppins text-sm" htmlFor="subject">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 dark:bg-gray-700 font-poppins text-sm"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1 font-poppins text-sm" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 dark:bg-gray-700 font-poppins text-sm resize-none"
                          placeholder="Your message..."
                        ></textarea>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-2.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-medium font-poppins text-sm flex items-center justify-center"
                      >
                        Send Message <FaPaperPlane className="ml-2" />
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 text-white">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <FaMapMarkedAlt className="text-lg" />
                </div>
                <h3 className="text-lg font-bold font-playfair">My Location</h3>
              </div>
            </div>
            
            <div className="p-4">
              <div className="h-64 rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.346545510822!2d76.7643975149584!3d30.3755085817706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5daa7f0f1f9d%3A0x9e1b6d5c5c5c5c5c!2sAmbala%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1629799234150!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-poppins">Ambala, Haryana, India</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=Ambala,+Haryana,+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-teal-600 dark:text-teal-400 hover:text-blue-600 dark:hover:text-blue-400 font-poppins"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-teal-100 dark:border-teal-800">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm text-teal-700 dark:text-teal-300 font-poppins">Your message is important to me</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;