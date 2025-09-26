// components/Aadhar.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaIdCard, FaQrcode, FaShieldAlt, FaLock, FaWater, FaFish } from 'react-icons/fa';

const Aadhar = () => {
  return (
    <section id="aadhar" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0891b2" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
            Aadhar Information
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
              <FaIdCard className="text-cyan-500 mr-2" />
              Aadhar Card Details
            </h3>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-cyan-500 mr-2" />
                    <h4 className="font-bold font-poppins">Security Notice</h4>
                  </div>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-4 font-poppins">
                    For security and privacy reasons, only partial information is displayed. 
                    Full details are available upon verification.
                  </p>
                  <div className="flex items-center text-sm text-cyan-600 dark:text-cyan-400">
                    <FaLock className="mr-2" />
                    <span>Your data is encrypted and securely stored</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">Aadhar Number</p>
                    <p className="font-mono font-medium font-poppins">XXXX-XXXX-1234</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">Name</p>
                    <p className="font-medium font-poppins">John Doe</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">Date of Birth</p>
                    <p className="font-medium font-poppins">XX/XX/1990</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">Gender</p>
                    <p className="font-medium font-poppins">Male</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 flex flex-col items-center justify-center">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-cyan-200 dark:border-cyan-600">
                  <div className="flex items-center justify-center mb-4">
                    <FaQrcode className="text-4xl text-cyan-500" />
                  </div>
                  <p className="text-center text-cyan-600 dark:text-cyan-400 mb-4 font-poppins">
                    Secure QR Code
                  </p>
                  <div className="w-48 h-48 bg-cyan-100 dark:bg-cyan-800 rounded flex items-center justify-center">
                    <span className="text-cyan-500 dark:text-cyan-400 font-poppins">QR Code</span>
                  </div>
                  <p className="text-center text-xs text-cyan-500 dark:text-cyan-500 mt-4 font-poppins">
                    Scan for verification
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-cyan-100 dark:border-cyan-800">
              <h4 className="font-bold mb-4 font-poppins">Address</h4>
              <p className="text-cyan-600 dark:text-cyan-400 font-poppins">
                123 Main Street, San Francisco, CA 94110, United States
              </p>
            </div>
          </div>
          
          {/* Decorative fish */}
          <motion.div 
            animate={{ x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 12 }}
            className="absolute bottom-8 right-8 text-cyan-500/20"
          >
            <FaFish className="text-4xl" />
          </motion.div>
        </div>
        
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 font-poppins"
          >
            Download Aadhar Card
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Aadhar;