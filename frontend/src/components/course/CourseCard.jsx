import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaUsers, FaClock, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add to local storage cart
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (!cart.find(item => item.id === course.id)) {
      cart.push(course);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Update cart count in header
    const cartUpdateEvent = new CustomEvent('cartUpdate', { detail: cart.length });
    window.dispatchEvent(cartUpdateEvent);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {course.title}
          </h3>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
            ${course.price}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-200">{course.rating}</span>
            <span className="text-gray-500">({course.reviews} reviews)</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <FaUsers />
            <span>{course.students} students</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <FaClock />
            <span>{course.duration}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(`/app/course/${course.id}`);
            }}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </button>
          {!course.purchased && (
            <button
              onClick={handleAddToCart}
              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              title="Add to Cart"
            >
              <FaShoppingCart />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
