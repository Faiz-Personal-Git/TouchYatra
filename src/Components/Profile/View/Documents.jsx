// components/Documents.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaUpload, FaDownload, FaTrash, FaEye, FaPlus, FaShieldAlt, FaLock } from 'react-icons/fa';

const Documents = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Passport",
      type: "Identification",
      description: "International travel document",
      uploadDate: "2023-06-15",
      size: "2.4 MB",
      category: "ID"
    },
    {
      id: 2,
      name: "Driver's License",
      type: "Identification",
      description: "Official driving permit",
      uploadDate: "2023-05-20",
      size: "1.8 MB",
      category: "ID"
    },
    {
      id: 3,
      name: "Insurance Policy",
      type: "Insurance",
      description: "Health insurance coverage details",
      uploadDate: "2023-07-10",
      size: "3.2 MB",
      category: "Insurance"
    },
    {
      id: 4,
      name: "Property Deed",
      type: "Legal",
      description: "Property ownership document",
      uploadDate: "2023-04-05",
      size: "4.7 MB",
      category: "Legal"
    }
  ]);

  const handleDeleteDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <section id="documents" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
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
            My Documents
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        {/* Security Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl shadow-lg p-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 mr-3">
                  <FaShieldAlt className="text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold font-poppins">Secure Document Storage</h3>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-poppins">All documents are encrypted and securely stored</p>
                </div>
                <div className="flex items-center">
                  <FaLock className="text-teal-500 mr-1" />
                  <span className="text-xs font-poppins">End-to-End Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {documents.map((doc, index) => (
            <motion.div 
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-teal-100 dark:border-teal-800 h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="p-4">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 flex items-center justify-center text-teal-500 mr-3 flex-shrink-0">
                      <FaFileAlt className="text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-sm font-poppins">{doc.name}</h3>
                        <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-full text-xs font-poppins">
                          {doc.category}
                        </span>
                      </div>
                      <p className="text-xs text-teal-600 dark:text-teal-400 font-poppins">{doc.type}</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 font-poppins">{doc.description}</p>
                  
                  <div className="flex justify-between text-xs mb-4">
                    <div>
                      <p className="text-teal-600 dark:text-teal-400 font-poppins">Uploaded</p>
                      <p className="font-medium font-poppins">{doc.uploadDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-teal-600 dark:text-teal-400 font-poppins">Size</p>
                      <p className="font-medium font-poppins">{doc.size}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button className="flex items-center text-xs text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-poppins">
                      <FaEye className="mr-1" />
                      View
                    </button>
                    <button className="flex items-center text-xs text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-poppins">
                      <FaDownload className="mr-1" />
                      Download
                    </button>
                    <button 
                      onClick={() => handleDeleteDocument(doc.id)}
                      className="flex items-center text-xs text-red-500 hover:text-red-700 font-poppins"
                    >
                      <FaTrash className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Add New Document Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Documents;