// components/Medical.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAllergies, 
  FaPills, 
  FaUserMd, 
  FaNotesMedical, 
  FaIdCard,
  FaExclamationTriangle,
  FaCapsules,
  FaLungs,
  FaStethoscope,
  FaTint,
  FaEdit,
  FaEllipsisV
} from 'react-icons/fa';

const Medical = () => {
  const medicalInfo = {
    bloodType: "O+",
    allergies: ["Penicillin", "Peanuts", "Dust mites"],
    medications: ["Vitamin D3", "Omega-3"],
    conditions: ["Mild Asthma"],
    doctors: [
      {
        name: "Dr. Sarah Johnson",
        specialty: "General Practitioner",
        phone: "+1 (555) 234-5678"
      },
      {
        name: "Dr. Michael Chen",
        specialty: "Cardiologist",
        phone: "+1 (555) 345-6789"
      }
    ]
  };

  return (
    <section id="medical" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
            Medical Information
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"
          ></motion.div>
        </div>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Medical Card */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <FaIdCard className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-playfair">Medical Profile</h3>
                      <p className="text-xs text-teal-100 font-poppins">Emergency Information</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                      <FaTint className="text-sm" />
                    </div>
                    <span className="text-sm font-poppins">{medicalInfo.bloodType}</span>
                  </div>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6">
                {/* Medical Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Allergies */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border border-yellow-100 dark:border-yellow-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-2">
                          <FaAllergies />
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white font-sans">Allergies</h4>
                      </div>
                      <span className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded-full font-sans">
                        {medicalInfo.allergies.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {medicalInfo.allergies.map((allergy, index) => (
                        <div key={index} className="flex items-center text-xs">
                          <FaExclamationTriangle className="text-yellow-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300 font-sans">{allergy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Medications */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-2">
                          <FaPills />
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white font-sans">Medications</h4>
                      </div>
                      <span className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full font-sans">
                        {medicalInfo.medications.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {medicalInfo.medications.map((medication, index) => (
                        <div key={index} className="flex items-center text-xs">
                          <FaCapsules className="text-blue-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300 font-sans">{medication}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Conditions */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-100 dark:border-purple-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mr-2">
                          <FaNotesMedical />
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white font-sans">Conditions</h4>
                      </div>
                      <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full font-sans">
                        {medicalInfo.conditions.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {medicalInfo.conditions.map((condition, index) => (
                        <div key={index} className="flex items-center text-xs">
                          <FaLungs className="text-purple-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300 font-sans">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Healthcare Providers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-blue-900/50"
            >
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 text-white">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <FaStethoscope className="text-lg" />
                  </div>
                  <h3 className="text-lg font-bold font-playfair">Healthcare Providers</h3>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                {medicalInfo.doctors.map((doctor, index) => (
                  <div key={index} className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-3 border border-teal-100 dark:border-teal-800">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0">
                        <FaUserMd />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white font-sans text-sm">{doctor.name}</h4>
                        <p className="text-xs text-teal-600 dark:text-teal-400 font-sans">{doctor.specialty}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-sans mt-1">{doctor.phone}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <FaEllipsisV className="text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Emergency Notice */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-xl overflow-hidden"
            >
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medical;