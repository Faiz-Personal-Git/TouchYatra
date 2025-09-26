// components/PaymentQR.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaCreditCard, FaMobileAlt, FaMoneyBillWave, FaWater, FaAnchor } from 'react-icons/fa';
import QRCode from 'react-qr-code';

const PaymentQR = () => {
  const paymentMethods = [
    {
      id: 1,
      name: "OceanPay",
      description: "Scan the QR code with any UPI app to make a payment",
      icon: <FaMobileAlt className="text-blue-500 text-2xl" />
    },
    {
      id: 2,
      name: "Credit/Debit Card",
      description: "Pay securely with your credit or debit card",
      icon: <FaCreditCard className="text-cyan-500 text-2xl" />
    },
    {
      id: 3,
      name: "Net Banking",
      description: "Direct payment from your bank account",
      icon: <FaMoneyBillWave className="text-teal-500 text-2xl" />
    }
  ];

  return (
    <section id="payment-qr" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0ea5e9" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
            Payment Options
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-cyan-100 dark:border-cyan-800">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center font-poppins">
                  <FaQrcode className="mr-2 text-cyan-500" />
                  Scan to Pay
                </h3>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-cyan-200 dark:border-cyan-600 mb-6">
                  <div className="flex justify-center mb-4">
                    <QRCode 
                      value="upi://pay?pa=yourupi@upi&pn=John%20Doe&am=100.00&cu=INR" 
                      size={180}
                    />
                  </div>
                  <p className="text-center text-cyan-600 dark:text-cyan-400 font-poppins">
                    Scan with any UPI app
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-3">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm font-poppins">1</span>
                    </div>
                    <p className="text-sm font-poppins">Open any UPI payment app (Google Pay, PhonePe, Paytm, etc.)</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-3">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm font-poppins">2</span>
                    </div>
                    <p className="text-sm font-poppins">Scan the QR code shown above</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-3">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm font-poppins">3</span>
                    </div>
                    <p className="text-sm font-poppins">Enter the amount and complete the payment</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-8">
                <h3 className="text-xl font-bold mb-6 font-poppins">Other Payment Methods</h3>
                
                <div className="space-y-6">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-cyan-200 dark:border-cyan-600">
                      <div className="flex items-center">
                        <div className="mr-4">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-bold font-poppins">{method.name}</h4>
                          <p className="text-sm text-cyan-600 dark:text-cyan-400 font-poppins">{method.description}</p>
                        </div>
                      </div>
                      <button className="mt-3 w-full py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-sm font-medium hover:bg-cyan-200 dark:hover:bg-cyan-800/50 transition-colors font-poppins">
                        Pay with {method.name}
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <h4 className="font-bold mb-2 text-cyan-800 dark:text-cyan-200 font-poppins">Need Help?</h4>
                  <p className="text-sm text-cyan-700 dark:text-cyan-300 font-poppins">
                    If you face any issues with payment, please contact me at john@example.com or call +1 (555) 123-4567.
                  </p>
                </div>
                
                {/* Decorative anchor */}
                <div className="absolute bottom-8 right-8 text-cyan-500/20">
                  <FaAnchor className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-cyan-600 dark:text-cyan-400 font-poppins">
          <p>All payments are securely processed. Your financial information is encrypted and never stored.</p>
        </div>
      </div>
    </section>
  );
};

export default PaymentQR;