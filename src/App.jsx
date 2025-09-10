import React from "react";
 
export default function App() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Networking"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Smarter <span className="text-teal-400">Connections</span>.<br />
            Stronger <span className="text-blue-400">Networking</span>.
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Stop carrying paper business cards. Share your details instantly, track engagement, 
            and grow your network with our digital-first smart solution.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:opacity-90 text-white font-medium px-6 py-3 rounded-full transition">
              Get Started
            </button>
            <button className="border border-gray-400 hover:border-teal-400 hover:text-teal-300 text-gray-300 font-medium px-6 py-3 rounded-full transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10 flex-wrap">
            <div>
              <p className="text-3xl font-bold text-teal-400">500K+</p>
              <p className="text-gray-400">Connections Tracked</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-400">50K+</p>
              <p className="text-gray-400">Smart Cards Activated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-400">200+</p>
              <p className="text-gray-400">Companies Onboard</p>
            </div>
          </div>
        </div>

        {/* Right Side Mockup */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-72 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Smart Business"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-lg font-semibold">Smart Digital Profile</h3>
              <p className="text-sm text-gray-300">One tap to share your identity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <div className="absolute bottom-6 right-6">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
          Buy Now
        </button>
      </div>
    </section>
  );
}
