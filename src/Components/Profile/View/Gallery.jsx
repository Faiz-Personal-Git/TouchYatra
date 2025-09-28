// components/Gallery.js
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const galleryItems = [
    { 
      id: 1, 
      title: 'Mountain Adventure',
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    },
    { 
      id: 2, 
      title: 'Nature Photography',
      imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    },
    { 
      id: 3, 
      title: 'Digital Artwork',
      imageUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    },
    { 
      id: 4, 
      title: 'Brand Identity',
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    },
    { 
      id: 5, 
      title: 'Urban Exploration',
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    },
    { 
      id: 6, 
      title: 'Abstract Compositions',
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    },
    { 
      id: 7, 
      title: 'Web Interfaces',
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    },
    { 
      id: 8, 
      title: 'Portrait Series',
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    },
    { 
      id: 9, 
      title: 'Illustration Works',
      imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"></div>
        </div>
        
        {/* Full Width Split Screen Layout */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Carousel */}
            <div className="w-full md:w-1/2">
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                {/* Main Image */}
                <div className="relative w-full" style={{ paddingBottom: '100%' }}> {/* 1:1 Aspect Ratio */}
                  <img 
                    src={galleryItems[currentSlide].imageUrl} 
                    alt={galleryItems[currentSlide].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Image Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-bold font-playfair">
                      {galleryItems[currentSlide].title}
                    </h3>
                  </div>
                </div>
                
                {/* Thumbnail Strip */}
                <div className="p-3 bg-gray-50 dark:bg-gray-900">
                  <div className="flex space-x-2 overflow-x-auto pb-1">
                    {galleryItems.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => goToSlide(index)}
                        className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                          index === currentSlide 
                            ? 'border-teal-500 scale-105' 
                            : 'border-transparent hover:border-gray-300'
                        }`}
                        aria-label={`View ${item.title}`}
                      >
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-poppins">
                        {currentSlide + 1} / {galleryItems.length}
                      </span>
                    </div>
                    
                    <div className="flex space-x-1">
                      {galleryItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-teal-500 w-4' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Text Content */}
            <div className="w-full md:w-1/2">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-teal-100 dark:border-teal-800 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-teal-600 dark:text-blue-400 font-playfair">
                  Visual Journey
                </h3>
                
                <div className="flex-grow">
                  <p className="mb-4 text-gray-700 dark:text-gray-300 font-poppins">
                    Welcome to my visual gallery, where each image tells a unique story. This collection represents my journey through different creative mediums, from nature photography to digital artwork and design projects.
                  </p>
                  
                  <p className="mb-4 text-gray-700 dark:text-gray-300 font-poppins">
                    Each photograph and artwork in this gallery captures a moment of inspiration, a glimpse into my creative process, or a solution to a design challenge. They reflect my passion for visual storytelling and my commitment to capturing beauty in both natural and digital environments.
                  </p>
                  
                  <p className="mb-6 text-gray-700 dark:text-gray-300 font-poppins">
                    Browse through the carousel to explore my work. The gallery features a diverse range of styles and subjects, showcasing my versatility as a creator and my ability to adapt to different visual languages.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-blue-400 font-poppins">Gallery Highlights:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="font-poppins">Nature photography capturing breathtaking landscapes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="font-poppins">Digital artwork exploring abstract concepts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="font-poppins">Brand identity designs for various clients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="font-poppins">Urban exploration photography</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="font-poppins">Web interface designs and prototypes</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto pt-6">
                  <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium font-poppins hover:opacity-90 transition-opacity">
                    View Full Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;