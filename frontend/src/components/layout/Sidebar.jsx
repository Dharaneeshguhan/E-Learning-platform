import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaBook, 
  FaFire, 
  FaStar, 
  FaFreeCodeCamp,
  FaLaptopCode,
  FaShieldAlt,
  FaRobot,
  FaUserCircle
} from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { path: '.', icon: <FaHome />, label: 'Home', end: true },
    { path: 'courses', icon: <FaBook />, label: 'All Courses' },
    { path: 'trending', icon: <FaFire />, label: 'Trending' },
    { path: 'top-rated', icon: <FaStar />, label: 'Top Rated' },
    { path: 'free-courses', icon: <FaFreeCodeCamp />, label: 'Free Courses' },
    { divider: true },
    { path: 'coding', icon: <FaLaptopCode />, label: 'Coding' },
    { path: 'security', icon: <FaShieldAlt />, label: 'Security' },
    { path: 'ai', icon: <FaRobot />, label: 'AI & ML' }
  ];

  return (
    <div className={`sidebar ${!isOpen ? 'transform -translate-x-full' : ''}`}>
      <div className="sidebar-header">
        <h2>LearnJoy</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          item.divider ? (
            <div key={index} className="sidebar-divider"></div>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              end={item.end}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </NavLink>
          )
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
