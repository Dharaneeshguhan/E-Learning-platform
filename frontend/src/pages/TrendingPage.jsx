import React from 'react';
import { FaFire, FaStar, FaUsers, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CourseCard from '../components/course/CourseCard';

const TrendingPage = () => {
  const trendingCourses = [
    {
      id: 'trend-001',
      title: 'AI for Everyone',
      image: '/images/courses/ai-course.jpg',
      description: 'Learn AI concepts and applications without complex math. Perfect for beginners wanting to understand artificial intelligence.',
      price: 49.99,
      rating: 4.9,
      reviews: 450,
      students: 2500,
      duration: '6 weeks',
      level: 'Beginner',
      instructor: 'Dr. Sarah Wilson',
      learningOutcomes: [
        'Understand AI fundamentals',
        'Learn about machine learning basics',
        'Explore AI applications',
        'Build simple AI projects',
      ],
      modules: [
        {
          title: 'Introduction to AI',
          lessons: [
            'What is Artificial Intelligence?',
            'Types of AI Systems',
            'AI in Daily Life',
          ],
        },
        {
          title: 'Machine Learning Basics',
          lessons: [
            'Understanding ML',
            'Common ML Applications',
            'Future of AI',
          ],
        },
      ],
      growth: '+125% this week',
    },
    {
      id: 'trend-002',
      title: 'Full Stack Development 2025',
      image: '/images/courses/fullstack.jpg',
      description: 'Master modern full stack development with the latest technologies. Build complete web applications from front to back.',
      price: 69.99,
      rating: 4.8,
      reviews: 380,
      students: 1800,
      duration: '8 weeks',
      level: 'Intermediate',
      instructor: 'John Smith',
      learningOutcomes: [
        'Build full stack applications',
        'Master frontend frameworks',
        'Develop backend APIs',
        'Deploy applications to cloud',
      ],
      modules: [
        {
          title: 'Frontend Development',
          lessons: [
            'Modern JavaScript',
            'React Fundamentals',
            'State Management',
          ],
        },
        {
          title: 'Backend Development',
          lessons: [
            'Node.js and Express',
            'Database Design',
            'API Development',
          ],
        },
      ],
      growth: '+85% this week',
    },
    {
      id: 'trend-003',
      title: 'Blockchain Development',
      image: '/images/courses/blockchain.jpg',
      description: 'Learn to build decentralized applications with blockchain technology. Master smart contracts and Web3 development.',
      price: 79.99,
      rating: 4.7,
      reviews: 290,
      students: 1200,
      duration: '10 weeks',
      level: 'Advanced',
      instructor: 'Mike Chen',
      learningOutcomes: [
        'Understand blockchain technology',
        'Develop smart contracts',
        'Build DApps',
        'Implement Web3 features',
      ],
      modules: [
        {
          title: 'Blockchain Fundamentals',
          lessons: [
            'Blockchain Architecture',
            'Cryptography Basics',
            'Consensus Mechanisms',
          ],
        },
        {
          title: 'Smart Contracts',
          lessons: [
            'Solidity Programming',
            'Contract Development',
            'Testing and Deployment',
          ],
        },
      ],
      growth: '+95% this week',
    },
  ];

  const trendingCategories = [
    {
      name: 'Artificial Intelligence',
      growth: '+150%',
      icon: '🤖',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      name: 'Web Development',
      growth: '+120%',
      icon: '💻',
      color: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    },
    {
      name: 'Blockchain',
      growth: '+90%',
      icon: '⛓️',
      color: 'bg-gradient-to-r from-green-500 to-emerald-400',
    },
    {
      name: 'Data Science',
      growth: '+85%',
      icon: '📊',
      color: 'bg-gradient-to-r from-orange-500 to-yellow-400',
    },
  ];

  const trendingTopics = [
    { name: '#ArtificialIntelligence', size: 'large' },
    { name: '#WebDevelopment', size: 'medium' },
    { name: '#MachineLearning', size: 'large' },
    { name: '#Python', size: 'small' },
    { name: '#Blockchain', size: 'medium' },
    { name: '#JavaScript', size: 'small' },
    { name: '#DataScience', size: 'medium' },
    { name: '#CyberSecurity', size: 'small' },
  ];

  const trendingReasons = [
    {
      title: 'Industry Demand',
      description: 'High demand for these skills in the job market',
      icon: '📈',
    },
    {
      title: 'Student Success',
      description: 'Proven track record of student career advancement',
      icon: '🎓',
    },
    {
      title: 'Latest Content',
      description: 'Recently updated with cutting-edge information',
      icon: '🆕',
    },
    {
      title: 'Expert Instructors',
      description: 'Taught by industry leaders and experts',
      icon: '👨‍🏫',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-8 md:mb-0 md:mr-10">
              <FaFire className="text-4xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Trending Now</h1>
              <p className="text-xl text-orange-100 max-w-2xl">
                Discover the hottest courses and topics in tech this week
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-12">
              <FaChartLine className="text-2xl text-gray-700 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Trending Categories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingCategories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`${category.color} text-white rounded-xl shadow-lg overflow-hidden`}
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full w-max">
                      <FaChartLine className="mr-2" />
                      <span>{category.growth} growth</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Hot Courses This Week
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingCourses.map((course) => (
                <div key={course.id} className="relative">
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center z-10">
                    <FaFire className="mr-1" /> Trending
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center z-10">
                    <FaChartLine className="mr-1" /> {course.growth}
                  </div>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Topics</h2>
              <p className="text-lg text-gray-600">
                Stay ahead of the curve with these trending topics
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full cursor-pointer ${
                    topic.size === 'large' ? 'text-lg' :
                    topic.size === 'medium' ? 'text-base' :
                    'text-sm'
                  }`}
                >
                  {topic.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trending Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why These Courses Are Trending
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trendingReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join the Learning Revolution</h2>
            <p className="text-xl text-orange-100 mb-8">
              Don't miss out on the hottest courses in tech - start learning today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/signup"
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Free
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

export default TrendingPage;