// components/Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaMountain, FaTree } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, SummitTech Inc.",
      content: "Alex is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are outstanding. I highly recommend him for any complex web development project.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, Forest Solutions",
      content: "Working with Alex was a pleasure. He has a deep understanding of both frontend and backend technologies, which made our project seamless. His communication skills and professionalism are top-notch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CTO, Alpine Digital",
      content: "Alex's expertise in React and Node.js transformed our application. He implemented features we thought were impossible and optimized performance beyond our expectations. A true professional.",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            Client Testimonials
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                {/* Top decorative element */}
                <div className="h-2 bg-gradient-to-r from-teal-500 to-blue-600"></div>
                
                <div className="p-6">
                  {/* Quote icon */}
                  <div className="text-teal-500 dark:text-blue-400 mb-4">
                    <FaQuoteLeft className="text-3xl opacity-20" />
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic font-poppins">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Star rating */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"} 
                      />
                    ))}
                  </div>
                  
                  {/* Person info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-teal-500"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white font-poppins">{testimonial.name}</h4>
                      <p className="text-sm text-teal-600 dark:text-blue-400 font-poppins">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative tree icon */}
              <div className="absolute -top-4 -right-4 text-teal-500/20">
                <FaTree className="text-4xl" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;