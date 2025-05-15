import React, { useContext, useState, useEffect } from 'react';
import {
  FaUser, FaEdit, FaCertificate, FaBook, FaClock,
  FaMedal, FaGlobe, FaMapMarkerAlt, FaCheck
} from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: '',
    interests: [],
    location: '',
    website: '',
  });

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [achievements, setAchievements] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestRemove = (index) => {
    const newInterests = [...profileData.interests];
    newInterests.splice(index, 1);
    setProfileData(prev => ({ ...prev, interests: newInterests }));
  };

  const handleInterestAdd = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      e.preventDefault();
      setProfileData(prev => ({
        ...prev,
        interests: [...prev.interests, e.target.value],
      }));
      e.target.value = '';
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch('/api/user/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) throw new Error('Failed to fetch profile data');
        const data = await response.json();
        setProfileData(data.profile);

        const coursesResponse = await fetch('/api/user/enrolled-courses', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!coursesResponse.ok) throw new Error('Failed to fetch enrolled courses');
        const coursesData = await coursesResponse.json();
        setEnrolledCourses(coursesData.courses);

        const achievementsResponse = await fetch('/api/user/achievements', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (achievementsResponse.ok) {
          const achievementsData = await achievementsResponse.json();
          setAchievements(achievementsData.achievements);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) fetchUserData();
  }, [user]);

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) throw new Error('Failed to update profile');
      const data = await response.json();
      setProfileData(data.profile);
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const stats = [
    { value: enrolledCourses.length.toString(), label: 'Courses Enrolled' },
    { value: enrolledCourses.filter(c => c.progress === 100).length.toString(), label: 'Completed' },
    { value: achievements.length.toString(), label: 'Achievements' },
    {
      value:
        Math.round(
          enrolledCourses.reduce((acc, curr) => acc + (curr.progress || 0), 0) /
          (enrolledCourses.length || 1)
        ) + '%',
      label: 'Avg. Progress'
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl">
              {user?.name ? user.name[0].toUpperCase() : <FaUser />}
            </div>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="text-2xl font-bold border-b bg-transparent focus:outline-none focus:border-indigo-500"
                />
              ) : (
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
              )}
              <p className="text-gray-600 dark:text-gray-400">{profileData.email}</p>
            </div>
          </div>
          <button
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            {isEditing ? (
              <>
                <FaCheck className="h-5 w-5" />
                <span>Save</span>
              </>
            ) : (
              <>
                <FaEdit className="h-5 w-5" />
                <span>Edit Profile</span>
              </>
            )}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-indigo-500">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Courses */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Enrolled Courses</h2>
            {enrolledCourses.length === 0 && (
              <p className="text-gray-500">No enrolled courses yet.</p>
            )}
            {enrolledCourses.map(course => (
              <div key={course.id} className="border dark:border-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-4">
                  <img src={course.image} alt={course.title} className="h-16 w-16 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{course.title}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FaClock className="mr-1" />
                        <span>{course.lastAccessed}</span>
                      </div>
                      {course.certificate && (
                        <div className="flex items-center text-sm text-green-600">
                          <FaCertificate className="mr-1" />
                          <span>Certificate Earned</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-indigo-500 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{course.progress}% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Bio, Interests, Achievements */}
        <div className="space-y-6">
          {/* Bio */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            {isEditing ? (
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                rows="4"
              />
            ) : (
              <p className="text-gray-600 dark:text-gray-400">{profileData.bio || 'No bio added yet.'}</p>
            )}
            <div className="mt-4 flex flex-col gap-2 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profileData.location}
                    onChange={handleChange}
                    className="border-b bg-transparent focus:outline-none focus:border-indigo-500"
                  />
                ) : (
                  <span>{profileData.location}</span>
                )}
              </div>
              <div className="flex items-center">
                <FaGlobe className="mr-2" />
                {isEditing ? (
                  <input
                    type="text"
                    name="website"
                    value={profileData.website}
                    onChange={handleChange}
                    className="border-b bg-transparent focus:outline-none focus:border-indigo-500"
                  />
                ) : (
                  <a
                    href={profileData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:underline"
                  >
                    {profileData.website}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Interests</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {profileData.interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full flex items-center"
                >
                  {interest}
                  {isEditing && (
                    <button
                      onClick={() => handleInterestRemove(index)}
                      className="ml-2 text-indigo-600 hover:text-indigo-800"
                    >
                      ×
                    </button>
                  )}
                </span>
              ))}
            </div>
            {isEditing && (
              <input
                type="text"
                placeholder="Add interest and press Enter"
                onKeyDown={handleInterestAdd}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}
          </div>

          {/* Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Achievements</h2>
            {achievements.length === 0 && (
              <p className="text-gray-500">No achievements yet.</p>
            )}
            <div className="space-y-4">
              {achievements.map(achievement => (
                <motion.div
                  key={achievement.id}
                  className={`${achievement.color} rounded-lg p-4 flex items-center space-x-4`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  </div>
                  <div className="text-sm text-gray-500">{achievement.date}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
