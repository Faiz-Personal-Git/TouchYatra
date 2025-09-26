// components/Medical.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaAllergies, FaPills, FaUserMd, FaWater, FaFish } from 'react-icons/fa';

const Medical = () => {
  const medicalInfo = {
    bloodType: "O+",
    allergies: ["Penicillin", "Peanuts", "Dust mites"],
    medications: ["Vitamin D3", "Omega-3"],
    conditions: ["Mild Asthma"],
    emergencyContacts: [
      {
        name: "Jane Doe",
        relationship: "Spouse",
        phone: "+1 (555) 123-4567"
      },
      {
        name: "Robert Doe",
        relationship: "Father",
        phone: "+1 (555) 987-6543"
      }
    ],
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
    <section id="medical" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#06b6d4" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-cyan-200/30 dark:bg-cyan-800/30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-blue-200/30 dark:bg-blue-800/30 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            Medical Information
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-cyan-100 dark:border-cyan-800">
          <div className="p-6 border-b border-cyan-100 dark:border-cyan-800">
            <h3 className="text-xl font-bold flex items-center font-poppins">
              <FaHeartbeat className="text-cyan-500 mr-2" />
              Medical Profile
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 font-poppins">Basic Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mr-3">
                      <FaHeartbeat />
                    </div>
                    <div>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">Blood Type</p>
                      <p className="font-medium font-poppins">{medicalInfo.bloodType}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-3 mt-1">
                      <FaAllergies />
                    </div>
                    <div>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">Allergies</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {medicalInfo.allergies.map((allergy, index) => (
                          <span key={index} className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded text-sm font-poppins">
                            {allergy}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      <FaPills />
                    </div>
                    <div>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">Current Medications</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {medicalInfo.medications.map((medication, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-sm font-poppins">
                            {medication}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 font-poppins">Medical Conditions</h4>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {medicalInfo.conditions.map((condition, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full font-poppins">
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-4 font-poppins">Emergency Contacts</h4>
                <div className="space-y-3">
                  {medicalInfo.emergencyContacts.map((contact, index) => (
                    <div key={index} className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-lg">
                      <p className="font-medium font-poppins">{contact.name}</p>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">{contact.relationship}</p>
                      <p className="text-sm font-poppins">{contact.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-cyan-100 dark:border-cyan-800">
              <h4 className="text-lg font-semibold mb-4 flex items-center font-poppins">
                <FaUserMd className="text-cyan-500 mr-2" />
                Doctors
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {medicalInfo.doctors.map((doctor, index) => (
                  <div key={index} className="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded-lg">
                    <p className="font-medium font-poppins">{doctor.name}</p>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">{doctor.specialty}</p>
                    <p className="text-sm mt-1 font-poppins">{doctor.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative fish */}
          <motion.div 
            animate={{ x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 15 }}
            className="absolute bottom-8 right-8 text-cyan-500/20"
          >
            <FaFish className="text-4xl" />
          </motion.div>
        </div>
        
        <div className="text-center mt-8 text-sm text-cyan-600 dark:text-cyan-400 font-poppins">
          <p>This information is for emergency purposes only. Please keep it updated.</p>
        </div>
      </div>
    </section>
  );
};

export default Medical;