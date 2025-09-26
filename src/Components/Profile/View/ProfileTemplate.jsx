// components/ProfileTemplate.js
import React from 'react';
import { FaDownload, FaEye, FaFilePdf, FaFileWord, FaFileAlt } from 'react-icons/fa';

const ProfileTemplate = () => {
  const templates = [
    {
      id: 1,
      name: "Professional Resume",
      description: "Clean and professional resume template suitable for corporate positions.",
      format: "PDF",
      icon: <FaFilePdf className="text-red-500 text-2xl" />
    },
    {
      id: 2,
      name: "Creative Portfolio",
      description: "Modern and creative portfolio template for designers and creative professionals.",
      format: "PDF",
      icon: <FaFilePdf className="text-red-500 text-2xl" />
    },
    {
      id: 3,
      name: "Academic CV",
      description: "Comprehensive CV template for academic and research positions.",
      format: "Word",
      icon: <FaFileWord className="text-blue-500 text-2xl" />
    },
    {
      id: 4,
      name: "Technical Profile",
      description: "Detailed technical profile template for developers and IT professionals.",
      format: "PDF",
      icon: <FaFilePdf className="text-red-500 text-2xl" />
    }
  ];

  return (
    <section id="profile-template" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Profile Templates</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        
        <p className="text-center max-w-2xl mx-auto mb-12">
          Download ready-to-use profile templates to create your own professional resume or portfolio. 
          These templates are customizable and optimized for different industries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map(template => (
            <div key={template.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4">
                    {template.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{template.name}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{template.format}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{template.description}</p>
                
                <div className="flex justify-between">
                  <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                    <FaEye /> Preview
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm hover:opacity-90 transition-opacity">
                    <FaDownload /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <FaFileAlt className="mr-2 text-blue-500" />
            Create Custom Template
          </h3>
          <p className="mb-6">
            Can't find what you're looking for? I can create a custom profile template tailored to your specific needs and industry.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Request Custom Template
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              View All Templates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileTemplate;