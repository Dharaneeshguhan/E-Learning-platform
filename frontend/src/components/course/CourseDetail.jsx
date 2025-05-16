import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaUsers, FaClock, FaBook, FaVideo, FaFileDownload, FaCertificate, FaInfinity } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const CourseDetail = ({ course }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:8081/api';

  const handleEnroll = () => {
    navigate('/payment', {
      state: {
        course,
        amount: course.price * 100
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Info */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-72 object-cover"
              />
              {course.level && (
                <span className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-medium ${
                  course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.level}
                </span>
              )}
            </div>

            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {course.title}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-gray-700 dark:text-gray-200">{course.rating}</span>
                  <span className="text-gray-500 ml-1">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <FaUsers className="mr-1" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <FaClock className="mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <h2 className="text-xl font-semibold mb-4">Course Description</h2>
                <p>{course.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningOutcomes?.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <FaBook className="mt-1 mr-2 text-indigo-500" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Course Content</h2>
                <div className="space-y-4">
                  {course.modules?.map((module, index) => (
                    <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-medium mb-2">{module.title}</h3>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <FaVideo className="mr-2 text-sm" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enrollment Card */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-24"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  ${course.price}
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleEnroll}
                  className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mb-4"
                  disabled={loading}
                >
                  Enroll Now
                </button>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-2">This course includes:</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaVideo className="mr-3" />
                    <span>{course.videoHours} hours of video content</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaFileDownload className="mr-3" />
                    <span>{course.resources} downloadable resources</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaCertificate className="mr-3" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaInfinity className="mr-3" />
                    <span>Full lifetime access</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
