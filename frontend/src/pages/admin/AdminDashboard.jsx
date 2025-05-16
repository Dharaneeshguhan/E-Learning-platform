import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FaUsers, FaBook, FaCog, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const stats = {
    totalStudents: 1250,
    totalCourses: 48,
    activeUsers: 890,
    completionRate: '75%'
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Students */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FaUsers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2.5 py-0.5 rounded-full">
                +12% vs last month
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Total Students</h3>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalStudents}</p>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">students</span>
            </div>
          </div>
        </div>

        {/* Total Courses */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <FaBook className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50 px-2.5 py-0.5 rounded-full">
                +5 this week
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Total Courses</h3>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalCourses}</p>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">courses</span>
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <FaTachometerAlt className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 px-2.5 py-0.5 rounded-full">
                Active now
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Active Users</h3>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.activeUsers}</p>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">users</span>
            </div>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <FaCog className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/50 px-2.5 py-0.5 rounded-full">
                +5% vs last week
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Completion Rate</h3>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.completionRate}</p>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
