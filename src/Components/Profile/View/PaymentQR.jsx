// components/PaymentQR.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaCreditCard, FaMobileAlt, FaMoneyBillWave, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import QRCode from 'react-qr-code';

const PaymentQR = () => {
  return (
    <section id="payment-qr" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
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
            Quick Payment
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
                    <FaQrcode className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-playfair">Secure Payment</h3>
                    <p className="text-xs text-teal-100 font-poppins">Multiple payment options available</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaShieldAlt className="mr-2" />
                  <span className="text-sm font-poppins">256-bit SSL</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* QR Code Section */}
                <div className="md:w-2/5 flex flex-col items-center">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-5 rounded-2xl border border-teal-200 dark:border-teal-700 mb-5 w-full">
                    <div className="flex justify-center mb-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <QRCode 
                          value="upi://pay?pa=yourupi@upi&pn=John%20Doe&am=100.00&cu=INR" 
                          size={140}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-teal-700 dark:text-teal-300 font-poppins mb-1">Scan with UPI App</p>
                      <div className="flex items-center justify-center text-xs text-teal-600 dark:text-teal-400">
                        <FaMobileAlt className="mr-1" />
                        <span>Google Pay, PhonePe, Paytm</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-full py-2 px-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-700">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-poppins">Instant confirmation</span>
                  </div>
                </div>
                
                {/* Payment Methods Section */}
                <div className="md:w-3/5">
                  <h3 className="text-lg font-bold mb-4 font-playfair">Other Payment Options</h3>
                  
                  <div className="space-y-4 mb-6">
                    {/* Card Payment */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700 h-full transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mr-4 shadow-sm">
                              <FaCreditCard className="text-blue-500 text-xl" />
                            </div>
                            <div>
                              <h4 className="font-bold font-poppins">Card Payment</h4>
                              <p className="text-sm text-blue-600 dark:text-blue-400 font-poppins">Credit/Debit cards</p>
                            </div>
                          </div>
                          <FaArrowRight className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Bank Transfer */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-700 h-full transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mr-4 shadow-sm">
                              <FaMoneyBillWave className="text-teal-500 text-xl" />
                            </div>
                            <div>
                              <h4 className="font-bold font-poppins">Bank Transfer</h4>
                              <p className="text-sm text-teal-600 dark:text-teal-400 font-poppins">Direct bank payment</p>
                            </div>
                          </div>
                          <FaArrowRight className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Security Badge */}
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-4 text-white">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <FaShieldAlt className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold font-poppins">Secure Transaction</h4>
                        <p className="text-xs text-teal-100 font-poppins">Your payment information is encrypted and secure</p>
                      </div>
                      <div className="ml-auto">
                        <FaCheckCircle className="text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-teal-100 dark:border-teal-800">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm text-teal-700 dark:text-teal-300 font-poppins">Payment confirmation sent to your email</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentQR;