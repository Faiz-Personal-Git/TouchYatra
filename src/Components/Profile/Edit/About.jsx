// components/About.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaUsers, FaChartLine, FaMountain, FaHiking, FaPlus, FaTrash, FaSave } from 'react-icons/fa';

const About = ({ darkMode }) => {
  // State for personal information
  const [personalInfo, setPersonalInfo] = useState([
    { id: 1, label: 'Name', value: 'Alex Johnson' },
    { id: 2, label: 'Email', value: 'alex@example.com' },
    { id: 3, label: 'Location', value: 'San Francisco, CA' },
    { id: 4, label: 'Availability', value: 'Full-time, Freelance' },
  ]);

  // State for skills
  const [skills, setSkills] = useState([
    { id: 1, name: 'Frontend Development', level: 90, icon: <FaCode /> },
    { id: 2, name: 'Backend Development', level: 85, icon: <FaCode /> },
    { id: 3, name: 'UI/UX Design', level: 75, icon: <FaLightbulb /> },
    { id: 4, name: 'Team Leadership', level: 80, icon: <FaUsers /> },
    { id: 5, name: 'Project Management', level: 70, icon: <FaChartLine /> },
  ]);

  // State for journey text
  const [journeyText, setJourneyText] = useState(
    "I'm a passionate full-stack developer with over 5 years of experience building web applications. " +
    "My journey started with a curiosity about how websites work, and it has evolved into a career " +
    "where I get to solve complex problems and create beautiful, functional user experiences.\n\n" +
    
    "I specialize in JavaScript ecosystem, particularly React and Node.js, but I'm always eager to " +
    "learn new technologies and frameworks. I believe in writing clean, maintainable code and " +
    "following best practices to ensure scalability and performance.\n\n" +
    
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source " +
    "projects, or sharing my knowledge through blog posts and speaking at tech meetups."
  );

  // State for technologies
  const [technologies, setTechnologies] = useState([
    'React', 'Vue', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Docker'
  ]);

  // State for new technology input
  const [newTech, setNewTech] = useState('');

  // State for new skill
  const [newSkill, setNewSkill] = useState({ name: '', level: 50 });

  // State for saving status
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Handle personal info change
  const handlePersonalInfoChange = (id, value) => {
    setPersonalInfo(personalInfo.map(info => 
      info.id === id ? { ...info, value } : info
    ));
  };

  // Handle skill change
  const handleSkillChange = (id, field, value) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  // Add new skill
  const handleAddSkill = () => {
    if (newSkill.name.trim() !== '') {
      const newId = Math.max(0, ...skills.map(s => s.id)) + 1;
      setSkills([...skills, { 
        id: newId, 
        name: newSkill.name, 
        level: newSkill.level,
        icon: <FaCode />
      }]);
      setNewSkill({ name: '', level: 50 });
    }
  };

  // Remove skill
  const handleRemoveSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  // Add new technology
  const handleAddTechnology = () => {
    if (newTech.trim() !== '' && !technologies.includes(newTech.trim())) {
      setTechnologies([...technologies, newTech.trim()]);
      setNewTech('');
    }
  };

  // Remove technology
  const handleRemoveTechnology = (tech) => {
    setTechnologies(technologies.filter(t => t !== tech));
  };

  // Save changes
  const handleSave = () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Section Editor</h1>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-75"
          >
            {saving ? (
              <>Saving...</>
            ) : (
              <>
                <FaSave className="mr-2" /> Save Changes
              </>
            )}
          </button>
        </div>

        {saveSuccess && (
          <div className={`mb-6 p-4 rounded-lg flex items-center ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'}`}>
            <FaSave className="mr-2" /> Changes saved successfully!
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className={`rounded-2xl p-6 shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
              <FaMountain className="mr-2" /> Personal Information
            </h2>
            
            <div className="space-y-4">
              {personalInfo.map((info) => (
                <div key={info.id} className="flex flex-col">
                  <label className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{info.label}</label>
                  <input
                    type="text"
                    value={info.value}
                    onChange={(e) => handlePersonalInfoChange(info.id, e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={`rounded-2xl p-6 shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
              <FaHiking className="mr-2" /> Skills & Expertise
            </h2>
            
            <div className="space-y-6 mb-6">
              {skills.map((skill) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 w-full">
                      <div className={darkMode ? 'text-teal-400' : 'text-teal-500'}>
                        {skill.icon}
                      </div>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => handleSkillChange(skill.id, 'name', e.target.value)}
                        className={`w-full px-3 py-1 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => handleSkillChange(skill.id, 'level', parseInt(e.target.value) || 0)}
                        className={`w-16 px-2 py-1 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>%</span>
                      <button
                        onClick={() => handleRemoveSkill(skill.id)}
                        className={`p-2 rounded-full ${darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-500 hover:bg-red-50'}`}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className={`w-full rounded-full h-3 overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`border-t pt-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Add New Skill</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Skill name"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                  className={`flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                />
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={newSkill.level}
                    onChange={(e) => setNewSkill({...newSkill, level: parseInt(e.target.value)})}
                    className="w-24"
                  />
                  <span className={`text-sm w-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{newSkill.level}%</span>
                </div>
                <button
                  onClick={handleAddSkill}
                  className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Text */}
        <div className={`mt-8 rounded-2xl p-6 shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
          <h2 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            <FaMountain className="mr-2" /> My Journey
          </h2>
          
          <textarea
            value={journeyText}
            onChange={(e) => setJourneyText(e.target.value)}
            rows={8}
            className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
          />
        </div>

        {/* Technologies */}
        <div className={`mt-8 rounded-2xl p-6 shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
          <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>Technologies I Work With</h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {technologies.map((tech, index) => (
              <div key={index} className={`flex items-center rounded-full pl-4 pr-2 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{tech}</span>
                <button
                  onClick={() => handleRemoveTechnology(tech)}
                  className={`ml-2 p-1 rounded-full ${darkMode ? 'text-gray-400 hover:text-red-400 hover:bg-red-900/30' : 'text-gray-500 hover:text-red-500 hover:bg-red-50'}`}
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Add new technology"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              className={`flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
            />
            <button
              onClick={handleAddTechnology}
              className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center"
            >
              <FaPlus className="mr-1" /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;