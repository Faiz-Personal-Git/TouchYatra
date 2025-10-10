
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaArrowRight, FaChevronDown, FaUser, FaCog, FaPalette, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setUser } from '../States/Slice/UserSlice';
import { useAlert } from './Alert';
import { useNavigate } from 'react-router-dom';

const AdminHeader = ({
  activeSection,
  darkMode,
  user,
  defaultProfileImage,
  headerSearch,
  setHeaderSearch
}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const handleLogout = async (e) => {
    e.preventDefault();

    const apiBaseUrl = import.meta.env.VITE_API_URL;
    const logoutEndpoint = import.meta.env.VITE_LOGOUT_API;

    try {
      const res = await fetch(`${apiBaseUrl}${logoutEndpoint}`, {
        method: 'GET',
        credentials: 'include', 
      });

      const jsonResponse = await res.json().catch(() => ({
        message: "Unexpected error occurred",
      }));

      if (!res.ok) {
        showAlert({
          type: "error",
          message: jsonResponse.message || "Logout failed",
        });
        return;
      }

      showAlert({
        type: "success",
        message: "Logged out successfully",
      });

      dispatch(setUser(null));
      navigate("/SignIn");

    } catch (error) {
      console.error("Logout error:", error);
      showAlert({
        type: "error",
        message: "Network error. Please try again.",
      });
    }
  };

  return (
    <header className="sticky top-0 z-20">
      {/* Animated Header Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 dark:from-teal-900/20 dark:to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white capitalize">
              {activeSection === 'dashboard' ? 'Dashboard' : activeSection}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeSection === 'dashboard'
                ? 'Overview of your profile and activity'
                : `Manage your ${activeSection} section`}
            </p>
          </div>

          {/* Creative Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search anything..."
              value={headerSearch}
              onChange={(e) => setHeaderSearch(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-full border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent pl-10"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" />
            <button className="absolute right-2 top-1.5 p-1 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-7 h-7 flex items-center justify-center">
              <FaArrowRight className="text-xs" />
            </button>
          </div>

          {/* Creative Profile Section */}
          <div className="flex items-center space-x-4">
            {/* Profile Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 hover:from-teal-100 hover:to-cyan-100 dark:hover:from-teal-800/50 dark:hover:to-cyan-800/50 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow">
                  <img
                    src={
                      user.ProfileImage
                        ? `${import.meta.env.VITE_API_URL}${user.ProfileImage}`
                        : defaultProfileImage
                    }
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{`${user?.FirstName} ${user?.LastName}`}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Admin</p>
                </div>
                <FaChevronDown className="text-gray-800 dark:text-white text-xs" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={
                          user.ProfileImage
                            ? `${import.meta.env.VITE_API_URL}${user.ProfileImage}`
                            : defaultProfileImage
                        }
                        alt="User Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-white font-medium">{`${user?.FirstName} ${user?.LastName}`}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{user.Roles}</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center">
                      <FaUser className="mr-3 text-gray-500" />
                      <span>View Profile</span>
                    </div>
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center">
                      <FaCog className="mr-3 text-gray-500" />
                      <span>Account Settings</span>
                    </div>
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center">
                      <FaPalette className="mr-3 text-gray-500" />
                      <span>Customize Theme</span>
                    </div>
                  </button>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center">
                      <FaSignOutAlt className="mr-3 text-gray-500" />
                      <span>Logout</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;