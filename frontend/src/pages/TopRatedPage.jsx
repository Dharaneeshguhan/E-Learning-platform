import React from 'react';
import {
  FaStar,
  FaUsers,
  FaTrophy,
  FaAward,
  FaMedal,
  FaArrowRight,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const TopRatedPage = () => {
  const topRatedCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      image: '/images/web-bootcamp.jpg',
      instructor: 'Angela Yu',
      rating: 4.9,
      reviews: 15000,
      students: 150000,
      description: 'Comprehensive web development course from zero to expert',
      price: 89.99,
      tags: ['Web Development', 'Full Stack', 'Best Seller'],
      badge: 'Best Seller',
      level: 'All Levels',
      duration: '12 weeks',
    },
    {
      id: 2,
      title: 'Python for Data Science and ML',
      image: '/images/python-ds.jpg',
      instructor: 'Jose Portilla',
      rating: 4.8,
      reviews: 12000,
      students: 120000,
      description: 'Master Python for data science and machine learning',
      price: 79.99,
      tags: ['Python', 'Data Science', 'Machine Learning'],
      badge: 'Highest Rated',
      level: 'Intermediate',
      duration: '10 weeks',
    },
    {
      id: 3,
      title: 'iOS App Development with Swift',
      image: '/images/ios-dev.jpg',
      instructor: 'Ray Wenderlich',
      rating: 4.9,
      reviews: 8000,
      students: 85000,
      description: 'Learn iOS development and publish your own apps',
      price: 99.99,
      tags: ['iOS', 'Swift', 'Mobile Development'],
      badge: 'Students Choice',
      level: 'Beginner',
      duration: '8 weeks',
    },
    {
      id: 4,
      title: 'Advanced JavaScript Concepts',
      image: '/images/js-advanced.jpg',
      instructor: 'Andrew Mead',
      rating: 4.9,
      reviews: 9500,
      students: 90000,
      description: 'Master advanced JavaScript patterns and modern practices',
      price: 69.99,
      tags: ['JavaScript', 'Advanced', 'Web Development'],
      badge: 'Top Rated',
      level: 'Advanced',
      duration: '6 weeks',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ... Hero, Rating Criteria, and Instructors sections above ... */}

      {/* Top Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Highest Rated Courses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {topRatedCourses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 relative"
                >
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {course.badge}
                  </div>
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute bottom-4 right-4 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                      {course.level}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {course.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      Instructor: <span className="font-medium">{course.instructor}</span>
                    </p>
                    <div className="flex items-center mb-3 text-sm">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="mr-3">{course.rating}</span>
                      <FaUsers className="text-gray-400 mr-1" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-3">
                      ${course.price.toFixed(2)}
                    </div>
                    <a
                      href={`/course/${course.id}`}
                      className="inline-block text-yellow-600 font-medium hover:text-yellow-700"
                    >
                      View Course <FaArrowRight className="inline ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TopRatedPage;
