import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { darkMode } = useTheme();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Header toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className="flex h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <Sidebar isOpen={isSidebarOpen} />
        <main 
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
