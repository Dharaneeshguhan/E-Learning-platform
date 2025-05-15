import React, { useState } from 'react';
import { FaStar, FaUsers, FaFilter, FaSearch, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      category: 'coding',
      image: 'https://www.google.com/imgres?q=web%20development%20courses&imgurl=https%3A%2F%2Fwww.clariwell.in%2Fresources%2Fbest-web-development-course-top-training-institute-in-pune.webp&imgrefurl=https%3A%2F%2Fwww.clariwell.in%2Fbest-web-development-courses-in-pune&docid=atnnjui9cSMVyM&tbnid=msR4fC9BXYqRcM&vet=12ahUKEwiImcLe2aSNAxVNffUHHRrfNLcQM3oECGMQAA..i&w=2917&h=1458&hcb=2&ved=2ahUKEwiImcLe2aSNAxVNffUHHRrfNLcQM3oECGMQAA',
      instructor: 'John Doe',
      rating: 4.5,
      students: 1200,
      price: 49.99,
      isFree: false,
      duration: '8 weeks',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Python Programming',
      category: 'coding',
      image: '/images/python.jpg',
      instructor: 'Jane Smith',
      rating: 4.8,
      students: 1500,
      price: 0,
      isFree: true,
      duration: '6 weeks',
      level: 'Beginner',
    },
    {
      id: 3,
      title: 'Machine Learning Basics',
      category: 'ai',
      image: '/images/ml.jpg',
      instructor: 'Alex Johnson',
      rating: 4.6,
      students: 800,
      price: 59.99,
      isFree: false,
      duration: '10 weeks',
      level: 'Intermediate',
    },
    {
      id: 4,
      title: 'Cybersecurity Essentials',
      category: 'security',
      image: '/images/cyber.jpg',
      instructor: 'Sarah Williams',
      rating: 4.7,
      students: 950,
      price: 69.99,
      isFree: false,
      duration: '12 weeks',
      level: 'Intermediate',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'coding', label: 'Coding' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'security', label: 'Cyber Security' },
  ];

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || course.category === selectedCategory;
      const matchesPrice =
        priceFilter === 'all' ||
        (priceFilter === 'free' && course.isFree) ||
        (priceFilter === 'paid' && !course.isFree);
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.students - a.students;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Our Courses</h1>
          <p className="text-gray-600">Find the perfect course to advance your skills</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="flex items-center">
                <FaFilter className="text-gray-500 mr-2" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg transition"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg transition"
              >
                <option value="all">All Prices</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg transition"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredCourses.map((course) => (
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
                  {course.isFree && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Free
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <span className="flex items-center bg-yellow-50 px-2 py-1 rounded text-sm">
                      <FaStar className="text-yellow-400 mr-1" /> {course.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">By {course.instructor}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center mr-4">
                      <FaUsers className="mr-1" /> {course.students.toLocaleString()}
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    {course.isFree ? (
                      <span className="text-green-600 font-bold">Free</span>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">${course.price}</span>
                    )}
                    <button
                      onClick={() => navigate(`/app/course/${course.id}`)}
                      className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Learn More <FaArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-12 text-center"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceFilter('all');
                setSortBy('popular');
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;