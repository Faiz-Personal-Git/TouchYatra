// components/Family.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Family = () => {
  const familyMembers = [
    {
      id: 1,
      name: "Jane Doe",
      relation: "Spouse",
      description: "Supportive partner who encourages my creative pursuits and professional growth.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Alex Doe",
      relation: "Child",
      description: "Inspires me with curiosity and creativity, reminding me to approach problems with fresh eyes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Robert Doe",
      relation: "Parent",
      description: "Provided unwavering support and instilled values of hard work and perseverance.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Sarah Doe",
      relation: "Sibling",
      description: "My biggest critic and strongest supporter, always pushing me to be better.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="family" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
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
            My Family
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
        
        {/* Family Members Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familyMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  {/* Image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Content overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                          <FaHeart className="text-white text-sm" />
                        </div>
                        <h3 className="text-xl font-bold text-white font-poppins">{member.name}</h3>
                      </div>
                      <p className="text-teal-200 font-poppins">{member.relation}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="p-5">
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-poppins">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full text-white shadow-lg">
              <p className="font-playfair text-lg">"Family is not an important thing. It's everything."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Family;