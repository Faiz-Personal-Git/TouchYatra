// components/Medical.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, 
  FaAllergies, 
  FaPills, 
  FaUserMd, 
  FaNotesMedical, 
  FaIdCard,
  FaExclamationTriangle,
  FaCapsules,
  FaLungs,
  FaStethoscope
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
    <section id="medical" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
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
            Medical Information
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        {/* Compact Medical ID Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <FaIdCard className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair">Medical ID</h3>
                    <p className="text-teal-100 text-sm font-poppins">Emergency Information</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-xs text-teal-100 font-poppins">BLOOD TYPE</div>
                    <div className="text-3xl font-bold font-playfair">{medicalInfo.bloodType}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-teal-100 font-poppins">ALLERGIES</div>
                    <div className="text-2xl font-bold font-playfair">{medicalInfo.allergies.length}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex flex-wrap gap-2">
                  {medicalInfo.allergies.map((allergy, index) => (
                    <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs font-poppins">
                      {allergy}
                    </span>
                  ))}
                  {medicalInfo.medications.map((medication, index) => (
                    <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs font-poppins">
                      {medication}
                    </span>
                  ))}
                  {medicalInfo.conditions.map((condition, index) => (
                    <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs font-poppins">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Medical Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {/* Allergies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-yellow-100 dark:border-yellow-800"
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-500 mr-2">
                <FaAllergies />
              </div>
              <h4 className="text-lg font-bold font-poppins">Allergies</h4>
            </div>
            <div className="space-y-2">
              {medicalInfo.allergies.map((allergy, index) => (
                <div key={index} className="flex items-center text-sm">
                  <FaExclamationTriangle className="text-yellow-500 mr-2 text-xs" />
                  <span className="font-poppins">{allergy}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Medications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-blue-100 dark:border-blue-800"
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 mr-2">
                <FaPills />
              </div>
              <h4 className="text-lg font-bold font-poppins">Medications</h4>
            </div>
            <div className="space-y-2">
              {medicalInfo.medications.map((medication, index) => (
                <div key={index} className="flex items-center text-sm">
                  <FaCapsules className="text-blue-500 mr-2 text-xs" />
                  <span className="font-poppins">{medication}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Conditions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-purple-100 dark:border-purple-800"
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mr-2">
                <FaNotesMedical />
              </div>
              <h4 className="text-lg font-bold font-poppins">Conditions</h4>
            </div>
            <div className="space-y-2">
              {medicalInfo.conditions.map((condition, index) => (
                <div key={index} className="flex items-center text-sm">
                  <FaLungs className="text-purple-500 mr-2 text-xs" />
                  <span className="font-poppins">{condition}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Healthcare Providers */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 mr-3">
              <FaStethoscope className="text-lg" />
            </div>
            <h3 className="text-xl font-bold font-playfair">Healthcare Providers</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {medicalInfo.doctors.map((doctor, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-teal-100 dark:border-teal-800"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 mr-3 flex-shrink-0">
                    <FaUserMd className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins">{doctor.name}</h4>
                    <p className="text-sm text-teal-600 dark:text-teal-400 font-poppins">{doctor.specialty}</p>
                    <p className="text-sm mt-1 font-poppins">{doctor.phone}</p>
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
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-teal-600 dark:text-teal-400 font-poppins">
            This information is for emergency purposes only. Please keep it updated.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Medical;