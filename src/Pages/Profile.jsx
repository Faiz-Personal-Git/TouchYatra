// Profile.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Aadhar, About, Blog, Certifications, Contact, Education, EmergencyContact, Experience, Footer, Header, Hero, Medical, MeetingRequest, MyTeam, PaymentQR, ProfileAnalytics, ProfileTemplate, Projects, Skills, Testimonials, Videos, YouTube } from '../Components/Profile/Index';

function Profile() {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

    return (
          <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-white text-gray-900'}`}>
      <Helmet>
        <title>John Doe | Full Stack Developer</title>
        <meta name="description" content="Personal portfolio of John Doe, a full stack developer specializing in React and Node.js" />
        <meta name="keywords" content="John Doe, developer, portfolio, React, Node.js, full stack" />
        <meta name="author" content="John Doe" />
        <meta property="og:title" content="John Doe | Full Stack Developer" />
        <meta property="og:description" content="Personal portfolio of John Doe, a full stack developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johndoe.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Doe | Full Stack Developer" />
        <meta name="twitter:description" content="Personal portfolio of John Doe, a full stack developer" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Certifications />
                <Testimonials />
                <MyTeam />
                <Blog />
                <YouTube />
                <Videos />
                <Medical />
                <EmergencyContact />
                <Aadhar />
                <MeetingRequest />
                <ProfileTemplate />
                <ProfileAnalytics />
                <PaymentQR />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default Profile;