import React from 'react';
import { Link } from 'react-router-dom';
import { FaGift, FaStar, FaUsers, FaDownload, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FreePage = () => {
  const freeCourses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      image: '/images/intro-programming.jpg',
      instructor: 'David Miller',
      rating: 4.6,
      students: 25000,
      description: 'Learn the basics of programming with this free course',
      tags: ['Programming', 'Beginner', 'Free'],
      duration: '2 hours',
      lessons: 12,
    },
    {
      id: 2,
      title: 'Web Development Basics',
      image: '/images/web-basics.jpg',
      instructor: 'Sarah Johnson',
      rating: 4.7,
      students: 18000,
      description: 'Start your web development journey with HTML and CSS',
      tags: ['Web Development', 'HTML', 'CSS'],
      duration: '3 hours',
      lessons: 15,
    },
    {
      id: 3,
      title: 'Git Essentials',
      image: '/images/git-basics.jpg',
      instructor: 'Mike Wilson',
      rating: 4.8,
      students: 15000,
      description: 'Master the basics of Git version control',
      tags: ['Git', 'Version Control', 'Essential'],
      duration: '1.5 hours',
      lessons: 8,
    },
  ];

  const benefits = [
    {
      icon: <FaDownload className="w-6 h-6" />,
      title: 'No Cost, High Value',
      description: 'Access quality education without any payment',
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: 'Quality Content',
      description: 'Created by industry experts',
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Community Learning',
      description: 'Learn alongside thousands of students',
    },
  ];

  const testimonials = [
    {
      rating: 5,
      quote: '"Perfect starting point for beginners. The free courses helped me decide my career path."',
      name: 'Alex P.',
      course: 'Introduction to Programming',
    },
    {
      rating: 5,
      quote: '"Great quality content without any cost. These courses are a game changer!"',
      name: 'Maria R.',
      course: 'Web Development Basics',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/pattern.svg')" }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-white bg-opacity-20 rounded-full">
              <FaGift className="w-10 h-10" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Free Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8"
          >
            Start learning with our collection of premium-quality free courses
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Try Our Free Courses?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of learning with our free resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Available Free Courses</h2>
                <p className="text-lg text-gray-600">Start learning today with these popular free courses</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Categories</option>
                  <option>Programming</option>
                  <option>Web Development</option>
                  <option>Development Tools</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freeCourses.map((course) => (
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
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FREE
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                      <span className="flex items-center bg-yellow-50 px-2 py-1 rounded text-sm">
                        <FaStar className="text-yellow-400 mr-1" /> {course.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="flex items-center mr-4">
                        <FaUsers className="mr-1" /> {course.students.toLocaleString()}
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/app/course/${course.id}`} 
                      className="w-full flex items-center justify-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
                    >
                      Start Learning <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Learners Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from students who started with our free courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Learning Journey Today</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Begin with our free courses and upgrade to premium content when you're ready
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signup" 
                className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Create Free Account
              </Link>
              <Link 
                to="/app/courses" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Browse All Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FreePage;