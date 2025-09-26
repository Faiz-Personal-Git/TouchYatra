// components/EmergencyContact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaAmbulance, FaHospital, FaUserAlt, FaWater, FaAnchor } from 'react-icons/fa';

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
    <section id="emergency-contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            Emergency Contacts
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center font-playfair flex items-center justify-center">
            <FaWater className="mr-2 text-blue-500" /> Emergency Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {emergencyServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4 text-3xl">
                  {service.icon}
                </div>
                <h4 className="font-bold mb-2 font-poppins">{service.name}</h4>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400 font-poppins">{service.number}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center font-playfair">Personal Emergency Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div 
                key={contact.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border border-blue-100 dark:border-blue-800"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white mr-4">
                      <FaUserAlt />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-poppins">{contact.name}</h4>
                      <p className="text-cyan-600 dark:text-cyan-400 font-poppins">{contact.relationship}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaPhone className="text-cyan-600 dark:text-cyan-400 mr-2" />
                      <span className="font-medium font-poppins">{contact.phone}</span>
                      {contact.secondaryPhone && (
                        <span className="ml-2 text-cyan-600 dark:text-cyan-400">| {contact.secondaryPhone}</span>
                      )}
                    </div>
                    
                    <div className="text-sm">
                      <p className="text-cyan-600 dark:text-cyan-400 font-poppins">Email: {contact.email}</p>
                    </div>
                    
                    <div className="text-sm">
                      <p className="text-cyan-600 dark:text-cyan-400 font-poppins">Address: {contact.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-cyan-100 dark:bg-cyan-900/30 px-6 py-3 flex justify-center">
                  <a 
                    href={`tel:${contact.phone.replace(/\D/g, '')}`} 
                    className="text-blue-600 dark:text-cyan-400 font-medium hover:underline font-poppins"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-cyan-600 dark:text-cyan-400 max-w-2xl mx-auto font-poppins">
            This information is intended for emergency use only. Please ensure your emergency contacts 
            are aware they are listed here and have given their consent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;