// components/Certifications.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt, FaWater, FaAnchor } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Jun 2022",
      credentialId: "AWS-ASA-123456",
      link: "https://aws.amazon.com/certification/",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "Mar 2021",
      credentialId: "GCP-PD-789012",
      link: "https://cloud.google.com/certification",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "Sep 2020",
      credentialId: "MDB-CD-345678",
      link: "https://university.mongodb.com/",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "React Advanced Patterns",
      issuer: "Ocean Frontend Masters",
      date: "Jan 2020",
      credentialId: "FE-React-AP-901234",
      link: "https://frontendmasters.com/",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0ea5e9" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-blue-100 dark:border-blue-800"
            >
              <div className="w-1/3">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white mr-3">
                    <FaCertificate />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-poppins">{cert.name}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-poppins">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-cyan-600 dark:text-cyan-400 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span className="font-poppins">{cert.date}</span>
                </div>
                
                <p className="text-sm mb-4 font-poppins">Credential ID: {cert.credentialId}</p>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-cyan-400 hover:underline font-poppins"
                >
                  Verify Certificate <FaExternalLinkAlt className="ml-2" />
                </a>
                
                {/* Decorative anchor */}
                <div className="absolute bottom-4 right-4 text-blue-500/20">
                  <FaAnchor className="text-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;