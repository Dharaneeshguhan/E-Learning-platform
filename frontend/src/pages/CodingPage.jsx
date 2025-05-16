import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaStar, FaUsers, FaFilter, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const CodingPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [error, setError] = useState('');
  
  const API_URL = 'http://localhost:8081/api';
  const [codingCourses, setCodingCourses] = React.useState([]);

  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_URL}/courses?category=coding`);
        const data = await response.json();
        if (data.success) {
          setCodingCourses(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch courses:', err);
        setError('Failed to load courses');
      }
    };

    fetchCourses();
  }, []);

  // Fallback courses if API fails
  const fallbackCourses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      image: '/images/web-dev.jpg',
      instructor: 'John Doe',
      rating: 4.5,
      students: 1200,
      description: 'Learn HTML, CSS, and JavaScript from scratch to build modern websites',
      price: 49.99,
      tags: ['HTML', 'CSS', 'JavaScript'],
      level: 'Beginner',
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'Python Programming Masterclass',
      image: '/images/python.jpg',
      instructor: 'Jane Smith',
      rating: 4.8,
      students: 1500,
      description: 'Master Python programming with practical projects and real-world applications',
      price: 59.99,
      tags: ['Python', 'Programming', 'Data Structures'],
      level: 'Intermediate',
      duration: '10 weeks',
    },
    {
      id: 3,
      title: 'React.js for Beginners',
      image: '/images/react.jpg',
      instructor: 'Mike Johnson',
      rating: 4.7,
      students: 980,
      description: 'Build modern web applications with React and related ecosystem tools',
      price: 54.99,
      tags: ['React', 'JavaScript', 'Web Development'],
      level: 'Beginner',
      duration: '6 weeks',
    },
    {
      id: 4,
      title: 'Advanced JavaScript Patterns',
      image: '/images/js-advanced.jpg',
      instructor: 'Sarah Williams',
      rating: 4.9,
      students: 850,
      description: 'Deep dive into advanced JavaScript concepts and design patterns',
      price: 64.99,
      tags: ['JavaScript', 'Design Patterns', 'Performance'],
      level: 'Advanced',
      duration: '7 weeks',
    },
  ];

  const stats = [
    { value: '20+', label: 'Courses' },
    { value: '5000+', label: 'Students' },
    { value: '4.7', label: 'Avg Rating' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
          {error}
        </div>
      )}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <FaCode className="text-3xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Coding Courses</h1>
              <p className="text-xl text-blue-100">
                Master programming languages and frameworks with industry experts
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <FaFilter className="text-gray-500 mr-2" />
              <span className="text-gray-700 font-medium">Filter Courses:</span>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>All Topics</option>
                <option>Web Development</option>
                <option>Python</option>
                <option>JavaScript</option>
                <option>Data Structures</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Coding Courses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(codingCourses.length > 0 ? codingCourses : fallbackCourses).map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                      <span className="flex items-center bg-yellow-50 px-2 py-1 rounded text-sm">
                        <FaStar className="text-yellow-400 mr-1" /> {course.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <span className="text-gray-600 text-sm flex items-center">
                          <FaUsers className="mr-1" /> {course.students.toLocaleString()}
                        </span>
                        <span className="text-gray-600 text-sm block">{course.duration}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">${course.price}</p>
                        <div>
                          <button
                            onClick={() => navigate(`/course/${course.id}`)}
                            className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                          >
                            Learn More <FaArrowRight className="ml-1" />
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/courses"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                View All Coding Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Coding?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students building their tech careers with our coding courses
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/signup"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/courses"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Browse All Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CodingPage;