// components/EmergencyContact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaAmbulance, FaHospital, FaUserAlt, FaEnvelope, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';

const EmergencyContact = () => {
  const emergencyContacts = [
    {
      id: 1,
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "+1 (555) 123-4567",
      secondaryPhone: "+1 (555) 765-4321",
      email: "jane@example.com",
      address: "123 Main St, San Francisco, CA 94110"
    },
    {
      id: 2,
      name: "Robert Doe",
      relationship: "Father",
      phone: "+1 (555) 987-6543",
      secondaryPhone: "+1 (555) 456-7890",
      email: "robert@example.com",
      address: "456 Oak Ave, New York, NY 10001"
    },
    {
      id: 3,
      name: "Emily Johnson",
      relationship: "Sister",
      phone: "+1 (555) 234-5678",
      secondaryPhone: "",
      email: "emily@example.com",
      address: "789 Pine Rd, Chicago, IL 60601"
    }
  ];

  const emergencyServices = [
    {
      name: "Emergency Services",
      number: "911",
      icon: <FaAmbulance className="text-red-500" />
    },
    {
      name: "Poison Control",
      number: "1-800-222-1222",
      icon: <FaHospital className="text-blue-500" />
    },
    {
      name: "Suicide Prevention",
      number: "988",
      icon: <FaPhone className="text-green-500" />
    }
  ];

  return (
    <section id="emergency-contact" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" style={{ backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 font-playfair"
          >
            Emergency Contacts
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-teal-700 dark:text-teal-300 font-poppins text-lg"
          >
          </motion.p>
        </div>
        
        {/* Emergency Services Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-xl p-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-1">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 mr-4">
                    <FaExclamationTriangle className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair">Emergency Services</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {emergencyServices.map((service, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 text-center border border-red-100 dark:border-red-800"
                    >
                      <div className="flex justify-center mb-3 text-3xl">
                        {service.icon}
                      </div>
                      <h4 className="font-bold mb-2 font-poppins">{service.name}</h4>
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400 font-playfair">{service.number}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Personal Emergency Contacts */}
        <div>
          <div className="flex items-center justify-center mb-10">
            <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 mr-4">
              <FaUserAlt className="text-xl" />
            </div>
            <h3 className="text-2xl font-bold font-playfair">Personal Emergency Contacts</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <motion.div 
                key={contact.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-teal-100 dark:border-teal-800 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white mr-4 shadow-md">
                        <FaUserAlt />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl font-poppins">{contact.name}</h4>
                        <p className="text-teal-600 dark:text-teal-400 font-poppins">{contact.relationship}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 mr-3 flex-shrink-0">
                          <FaPhone className="text-sm" />
                        </div>
                        <div>
                          <p className="font-medium font-poppins">{contact.phone}</p>
                          {contact.secondaryPhone && (
                            <p className="text-sm text-teal-600 dark:text-teal-400 font-poppins">{contact.secondaryPhone}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 mr-3 flex-shrink-0">
                          <FaEnvelope className="text-sm" />
                        </div>
                        <p className="text-sm font-poppins">{contact.email}</p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mr-3 flex-shrink-0">
                          <FaMapMarkerAlt className="text-sm" />
                        </div>
                        <p className="text-sm font-poppins">{contact.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-4">
                    <a 
                      href={`tel:${contact.phone.replace(/\D/g, '')}`} 
                      className="text-white font-medium hover:text-teal-100 transition-colors flex items-center justify-center font-poppins"
                    >
                      <FaPhone className="mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-teal-100 dark:border-teal-800 shadow-md">
            <p className="text-teal-700 dark:text-teal-300 font-poppins">
              This information is intended for emergency use only. Please ensure your emergency contacts 
              are aware they are listed here and have given their consent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyContact;