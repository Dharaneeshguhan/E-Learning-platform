import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FaUsers, FaBook, FaCog, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = {
    totalStudents: 1250,
    totalCourses: 48,
    activeUsers: 890,
    completionRate: '75%'
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <div
            onClick={() => navigate('/admin')}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <FaTachometerAlt className="w-5 h-5" />
            <span className="mx-3">Dashboard</span>
          </div>
          <div
            onClick={() => navigate('/admin/users')}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <FaUsers className="w-5 h-5" />
            <span className="mx-3">Users</span>
          </div>
          <div
            onClick={() => navigate('/admin/courses')}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <FaBook className="w-5 h-5" />
            <span className="mx-3">Courses</span>
          </div>
          <div
            onClick={() => navigate('/admin/settings')}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <FaCog className="w-5 h-5" />
            <span className="mx-3">Settings</span>
          </div>
          <div
            onClick={handleLogout}
            className="flex items-center px-6 py-3 text-red-600 hover:bg-red-50 cursor-pointer mt-auto"
          >
            <FaSignOutAlt className="w-5 h-5" />
            <span className="mx-3">Logout</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Total Students</h3>
              <p className="text-3xl text-primary">{stats.totalStudents}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Total Courses</h3>
              <p className="text-3xl text-primary">{stats.totalCourses}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Active Users</h3>
              <p className="text-3xl text-primary">{stats.activeUsers}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Completion Rate</h3>
              <p className="text-3xl text-primary">{stats.completionRate}</p>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
