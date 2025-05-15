import React from 'react';
import { FaRobot, FaStar, FaUsers, FaArrowRight, FaChartLine, FaProjectDiagram, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CourseCard from '../components/course/CourseCard';

const AIPage = () => {
  const aiCourses = [
    {
      id: 'ai-001',
      title: 'Machine Learning Fundamentals',
      image: '/images/courses/ml.jpg',
      description: 'Learn the basics of machine learning algorithms and their practical implementation. Master Python, scikit-learn, and essential ML concepts.',
      price: 69.99,
      rating: 4.8,
      reviews: 320,
      students: 950,
      duration: '10 weeks',
      level: 'Intermediate',
      instructor: 'Dr. Sarah Wilson',
      learningOutcomes: [
        'Understand ML algorithms and their applications',
        'Implement supervised and unsupervised learning',
        'Build and evaluate ML models',
        'Work with real-world datasets',
      ],
      modules: [
        {
          title: 'Introduction to Machine Learning',
          lessons: [
            'What is Machine Learning?',
            'Types of ML Algorithms',
            'Python for ML',
          ],
        },
        {
          title: 'Supervised Learning',
          lessons: [
            'Linear Regression',
            'Classification Algorithms',
            'Model Evaluation',
          ],
        },
      ],
    },
    {
      id: 'ai-002',
      title: 'Deep Learning with TensorFlow',
      image: '/images/courses/deep-learning.jpg',
      description: 'Master deep learning architectures using TensorFlow and Keras frameworks. Build and deploy neural networks for real-world applications.',
      price: 79.99,
      rating: 4.9,
      reviews: 245,
      students: 750,
      duration: '12 weeks',
      level: 'Advanced',
      instructor: 'Prof. Alex Chen',
      learningOutcomes: [
        'Build neural networks with TensorFlow',
        'Implement CNNs and RNNs',
        'Train deep learning models',
        'Deploy models to production',
      ],
      modules: [
        {
          title: 'Neural Networks Basics',
          lessons: [
            'Artificial Neural Networks',
            'Activation Functions',
            'Backpropagation',
          ],
        },
        {
          title: 'Advanced Architectures',
          lessons: [
            'Convolutional Neural Networks',
            'Recurrent Neural Networks',
            'Transfer Learning',
          ],
        },
      ],
    },
    {
      id: 'ai-003',
      title: 'Natural Language Processing',
      image: '/images/courses/nlp.jpg',
      description: 'Build NLP applications with Python, NLTK, and transformer models. Learn text processing, sentiment analysis, and language generation.',
      price: 64.99,
      rating: 4.7,
      reviews: 180,
      students: 620,
      duration: '8 weeks',
      level: 'Intermediate',
      instructor: 'Dr. Emily Brown',
      learningOutcomes: [
        'Process and analyze text data',
        'Build language models',
        'Implement sentiment analysis',
        'Work with transformer models',
      ],
      modules: [
        {
          title: 'Text Processing Fundamentals',
          lessons: [
            'Tokenization and Normalization',
            'Part-of-Speech Tagging',
            'Named Entity Recognition',
          ],
        },
        {
          title: 'Advanced NLP',
          lessons: [
            'Word Embeddings',
            'Transformer Architecture',
            'BERT and GPT Models',
          ],
        },
      ],
    },
  ];

  const stats = [
    { value: '15+', label: 'Courses' },
    { value: '3000+', label: 'Students' },
    { value: '4.8', label: 'Avg Rating' },
  ];

  const features = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: 'Career Opportunities',
      description: 'High demand for AI/ML professionals across all industries',
    },
    {
      icon: <FaProjectDiagram className="w-8 h-8" />,
      title: 'Practical Projects',
      description: 'Build real-world AI applications and deployable models',
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: 'Expert Instructors',
      description: 'Learn from experienced AI researchers and practitioners',
    },
  ];

  const learningPath = [
    {
      step: 1,
      title: 'Python Fundamentals',
      description: 'Master Python programming basics for AI/ML',
    },
    {
      step: 2,
      title: 'Data Science Essentials',
      description: 'Learn data manipulation and analysis techniques',
    },
    {
      step: 3,
      title: 'Machine Learning',
      description: 'Understand ML algorithms and their implementation',
    },
    {
      step: 4,
      title: 'Deep Learning',
      description: 'Master neural networks and advanced architectures',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-8 md:mb-0 md:mr-10">
              <FaRobot className="text-4xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">AI & Machine Learning</h1>
              <p className="text-xl text-purple-100 max-w-2xl">
                Master artificial intelligence and build intelligent systems that transform industries
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

      {/* Why Learn Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Learn AI & Machine Learning?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Artificial Intelligence is transforming every industry. Gain the skills to build intelligent systems, analyze complex data, and solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
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
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured AI Courses</h2>
                <p className="text-lg text-gray-600">Start your AI journey with these comprehensive courses</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Courses?</h2>
            <p className="text-lg text-gray-600">
              Learn from industry experts and get hands-on experience with real-world projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-md"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Learning Path</h2>
            <p className="text-lg text-gray-600">
              Follow our structured learning path to master AI and Machine Learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPath.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-purple-50 rounded-xl relative"
              >
                <div className="text-4xl font-bold text-purple-200 absolute top-4 right-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI/ML Learning Path</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow this structured path to systematically build your AI expertise
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-indigo-500"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {learningPath.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}
                  >
                    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                      <div className={`absolute -top-3 ${index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'} w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold`}>
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Master AI?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of students building cutting-edge AI skills
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/signup"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Start Learning Today
              </a>
              <a
                href="/courses"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Browse All AI Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPage;