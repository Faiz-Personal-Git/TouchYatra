// components/Experience.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaPlus, FaTrash, FaSave, FaTimes, FaEdit } from 'react-icons/fa';

const Experience = ({ darkMode }) => {
  // Initial experiences data
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "Senior Full Stack Developer",
      company: "SummitTech Solutions",
      location: "San Francisco, CA",
      period: "Jan 2020 - Present",
      description: "Lead development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
      achievements: [
        "Reduced page load time by 40% through optimization techniques",
        "Led a team of 5 developers to deliver a major project 2 months ahead of schedule",
        "Implemented CI/CD pipeline that reduced deployment time by 60%"
      ]
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Alpine Digital Agency",
      location: "New York, NY",
      period: "Jun 2017 - Dec 2019",
      description: "Developed responsive web applications using modern JavaScript frameworks. Collaborated with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Built a customer dashboard that increased user engagement by 35%",
        "Migrated legacy codebase to React, improving maintainability",
        "Implemented automated testing that reduced bugs by 50%"
      ]
    },
    {
      id: 3,
      position: "Junior Web Developer",
      company: "Forest StartUp Ventures",
      location: "Austin, TX",
      period: "Mar 2015 - May 2017",
      description: "Assisted in developing and maintaining company websites and web applications. Gained experience in full-stack development and agile methodologies.",
      achievements: [
        "Contributed to the development of a SaaS product that acquired 10,000+ users",
        "Learned and implemented modern web technologies quickly",
        "Participated in all phases of the software development lifecycle"
      ]
    }
  ]);

  // State for new experience form
  const [newExperience, setNewExperience] = useState({
    position: "",
    company: "",
    location: "",
    period: "",
    description: "",
    achievements: [""]
  });

  // State for editing
  const [editingId, setEditingId] = useState(null);
  const [editExperience, setEditExperience] = useState(null);

  // State for saving status
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Handle input change for new experience
  const handleNewExperienceChange = (field, value) => {
    setNewExperience({ ...newExperience, [field]: value });
  };

  // Handle achievement change for new experience
  const handleNewAchievementChange = (index, value) => {
    const updatedAchievements = [...newExperience.achievements];
    updatedAchievements[index] = value;
    setNewExperience({ ...newExperience, achievements: updatedAchievements });
  };

  // Add new achievement field to new experience
  const addNewAchievement = () => {
    setNewExperience({
      ...newExperience,
      achievements: [...newExperience.achievements, ""]
    });
  };

  // Remove achievement field from new experience
  const removeNewAchievement = (index) => {
    if (newExperience.achievements.length > 1) {
      const updatedAchievements = [...newExperience.achievements];
      updatedAchievements.splice(index, 1);
      setNewExperience({ ...newExperience, achievements: updatedAchievements });
    }
  };

  // Add new experience
  const handleAddExperience = () => {
    if (newExperience.position && newExperience.company && newExperience.period) {
      const newId = Math.max(0, ...experiences.map(e => e.id)) + 1;
      const filteredAchievements = newExperience.achievements.filter(a => a.trim() !== "");
      
      setExperiences([
        ...experiences,
        {
          ...newExperience,
          id: newId,
          achievements: filteredAchievements
        }
      ]);
      
      // Reset form
      setNewExperience({
        position: "",
        company: "",
        location: "",
        period: "",
        description: "",
        achievements: [""]
      });
    }
  };

  // Start editing an experience
  const startEditing = (experience) => {
    setEditingId(experience.id);
    setEditExperience({ ...experience });
  };

  // Handle input change for editing experience
  const handleEditExperienceChange = (field, value) => {
    setEditExperience({ ...editExperience, [field]: value });
  };

  // Handle achievement change for editing experience
  const handleEditAchievementChange = (index, value) => {
    const updatedAchievements = [...editExperience.achievements];
    updatedAchievements[index] = value;
    setEditExperience({ ...editExperience, achievements: updatedAchievements });
  };

  // Add new achievement field to editing experience
  const addEditAchievement = () => {
    setEditExperience({
      ...editExperience,
      achievements: [...editExperience.achievements, ""]
    });
  };

  // Remove achievement field from editing experience
  const removeEditAchievement = (index) => {
    if (editExperience.achievements.length > 1) {
      const updatedAchievements = [...editExperience.achievements];
      updatedAchievements.splice(index, 1);
      setEditExperience({ ...editExperience, achievements: updatedAchievements });
    }
  };

  // Save edited experience
  const saveEditedExperience = () => {
    if (editExperience.position && editExperience.company && editExperience.period) {
      const filteredAchievements = editExperience.achievements.filter(a => a.trim() !== "");
      
      setExperiences(experiences.map(exp => 
        exp.id === editingId 
          ? { ...editExperience, achievements: filteredAchievements } 
          : exp
      ));
      
      cancelEditing();
    }
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setEditExperience(null);
  };

  // Delete experience
  const deleteExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
    if (editingId === id) {
      cancelEditing();
    }
  };

  // Save all changes
  const handleSave = () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1500);
  };

  // Theme classes
  const bgClass = darkMode ? 'bg-gray-900' : 'bg-white';
  const textClass = darkMode ? 'text-gray-200' : 'text-gray-800';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-700';
  const textMutedClass = darkMode ? 'text-gray-400' : 'text-gray-500';
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const inputBgClass = darkMode ? 'bg-gray-700' : 'bg-white';
  const inputBorderClass = darkMode ? 'border-gray-600' : 'border-gray-300';
  const tealTextClass = darkMode ? 'text-teal-400' : 'text-teal-600';
  const tealHoverClass = darkMode ? 'hover:text-teal-300' : 'hover:text-teal-800';
  const redHoverClass = darkMode ? 'hover:bg-red-900/30' : 'hover:bg-red-50';
  const successBgClass = darkMode ? 'bg-green-900' : 'bg-green-100';
  const successTextClass = darkMode ? 'text-green-200' : 'text-green-700';

  return (
    <div className={`min-h-screen p-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${textClass}`}>Experience Editor</h1>
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
          <div className={`mb-6 p-4 rounded-lg flex items-center ${successBgClass} ${successTextClass}`}>
            <FaSave className="mr-2" /> Changes saved successfully!
          </div>
        )}

        {/* Add New Experience Form */}
        <div className={`rounded-2xl p-6 border shadow-sm mb-8 ${cardBgClass} ${borderClass}`}>
          <h2 className={`text-2xl font-semibold mb-6 flex items-center ${tealTextClass}`}>
            <FaPlus className="mr-2" /> Add New Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Position</label>
              <input
                type="text"
                value={newExperience.position}
                onChange={(e) => handleNewExperienceChange('position', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                placeholder="Job Title"
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Company</label>
              <input
                type="text"
                value={newExperience.company}
                onChange={(e) => handleNewExperienceChange('company', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Location</label>
              <input
                type="text"
                value={newExperience.location}
                onChange={(e) => handleNewExperienceChange('location', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                placeholder="City, State"
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Period</label>
              <input
                type="text"
                value={newExperience.period}
                onChange={(e) => handleNewExperienceChange('period', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                placeholder="Jan 2020 - Present"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Description</label>
            <textarea
              value={newExperience.description}
              onChange={(e) => handleNewExperienceChange('description', e.target.value)}
              rows={3}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
              placeholder="Job description"
            />
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className={`block text-sm font-medium ${textSecondaryClass}`}>Key Achievements</label>
              <button
                type="button"
                onClick={addNewAchievement}
                className={`text-sm flex items-center ${tealTextClass} ${tealHoverClass}`}
              >
                <FaPlus className="mr-1" /> Add Achievement
              </button>
            </div>
            {newExperience.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) => handleNewAchievementChange(index, e.target.value)}
                  className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                  placeholder="Achievement description"
                />
                <button
                  type="button"
                  onClick={() => removeNewAchievement(index)}
                  disabled={newExperience.achievements.length <= 1}
                  className={`ml-2 p-2 rounded-full disabled:opacity-25 disabled:cursor-not-allowed ${textMutedClass} ${redHoverClass}`}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          
          <button
            onClick={handleAddExperience}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center"
          >
            <FaPlus className="mr-2" /> Add Experience
          </button>
        </div>

        {/* Existing Experiences */}
        <div className="space-y-8">
          <h2 className={`text-2xl font-semibold ${textClass}`}>Your Experience</h2>
          
          {experiences.length === 0 ? (
            <div className={`text-center py-8 ${textMutedClass}`}>
              No experience entries yet. Add your first experience above.
            </div>
          ) : (
            experiences.map((experience) => (
              <div key={experience.id} className={`rounded-2xl p-6 border shadow-sm ${cardBgClass} ${borderClass}`}>
                {editingId === experience.id ? (
                  // Edit Mode
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className={`text-xl font-semibold ${textClass}`}>Editing Experience</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={saveEditedExperience}
                          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Position</label>
                        <input
                          type="text"
                          value={editExperience.position}
                          onChange={(e) => handleEditExperienceChange('position', e.target.value)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Company</label>
                        <input
                          type="text"
                          value={editExperience.company}
                          onChange={(e) => handleEditExperienceChange('company', e.target.value)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Location</label>
                        <input
                          type="text"
                          value={editExperience.location}
                          onChange={(e) => handleEditExperienceChange('location', e.target.value)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Period</label>
                        <input
                          type="text"
                          value={editExperience.period}
                          onChange={(e) => handleEditExperienceChange('period', e.target.value)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className={`block text-sm font-medium mb-1 ${textSecondaryClass}`}>Description</label>
                      <textarea
                        value={editExperience.description}
                        onChange={(e) => handleEditExperienceChange('description', e.target.value)}
                        rows={3}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className={`block text-sm font-medium ${textSecondaryClass}`}>Key Achievements</label>
                        <button
                          type="button"
                          onClick={addEditAchievement}
                          className={`text-sm flex items-center ${tealTextClass} ${tealHoverClass}`}
                        >
                          <FaPlus className="mr-1" /> Add Achievement
                        </button>
                      </div>
                      {editExperience.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <input
                            type="text"
                            value={achievement}
                            onChange={(e) => handleEditAchievementChange(index, e.target.value)}
                            className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputBgClass} ${inputBorderClass} ${textClass}`}
                          />
                          <button
                            type="button"
                            onClick={() => removeEditAchievement(index)}
                            disabled={editExperience.achievements.length <= 1}
                            className={`ml-2 p-2 rounded-full disabled:opacity-25 disabled:cursor-not-allowed ${textMutedClass} ${redHoverClass}`}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-xl font-bold ${textClass}`}>{experience.position}</h3>
                        <div className={`flex items-center mb-1 ${tealTextClass}`}>
                          <span className="font-medium">{experience.company}</span>
                          <span className="mx-2">•</span>
                          <FaMapMarkerAlt className="mr-1" />
                          <span>{experience.location}</span>
                        </div>
                        <div className={`flex items-center ${tealTextClass}`}>
                          <FaCalendarAlt className="mr-2" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => startEditing(experience)}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteExperience(experience.id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    
                    <p className={`mb-4 ${textSecondaryClass}`}>{experience.description}</p>
                    
                    <div>
                      <h4 className={`font-medium mb-2 ${textClass}`}>Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {experience.achievements.map((achievement, index) => (
                          <li key={index} className={textSecondaryClass}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;