import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'E-Learning Platform',
    adminEmail: 'admin@example.com',
    maxUsersPerCourse: 30,
    allowPublicRegistration: true,
    emailNotifications: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the settings to your backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Settings</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
              Site Name
            </label>
            <input
              id="siteName"
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({...settings, siteName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Admin Email
            </label>
            <input
              id="adminEmail"
              type="email"
              value={settings.adminEmail}
              onChange={(e) => setSettings({...settings, adminEmail: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="maxUsers" className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Users per Course
            </label>
            <input
              id="maxUsers"
              type="number"
              value={settings.maxUsersPerCourse}
              onChange={(e) => setSettings({...settings, maxUsersPerCourse: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center">
            <input
              id="publicRegistration"
              type="checkbox"
              checked={settings.allowPublicRegistration}
              onChange={(e) => setSettings({...settings, allowPublicRegistration: e.target.checked})}
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="publicRegistration" className="ml-2 block text-sm text-gray-700">
              Allow Public Registration
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="emailNotifications"
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
              Enable Email Notifications
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
