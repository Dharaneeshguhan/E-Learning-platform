import React from 'react';
import {
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaLock,
  FaServer,
  FaBug,
  FaArrowRight,
  FaCertificate,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const SecurityPage = () => {
  const securityCourses = [
    {
      id: 1,
      title: 'Ethical Hacking Fundamentals',
      image: '/images/ethical-hacking.jpg',
      instructor: 'Mark Thompson',
      rating: 4.9,
      students: 850,
      description: 'Learn ethical hacking techniques and penetration testing methodologies',
      price: 74.99,
      tags: ['Ethical Hacking', 'Penetration Testing', 'Security'],
      level: 'Intermediate',
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'Network Security Essentials',
      image: '/images/network-security.jpg',
      instructor: 'Lisa Anderson',
      rating: 4.7,
      students: 720,
      description: 'Master network security concepts including firewalls, VPNs, and IDS/IPS',
      price: 69.99,
      tags: ['Network Security', 'Firewalls', 'VPN'],
      level: 'Intermediate',
      duration: '6 weeks',
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      image: '/images/cybersecurity.jpg',
      instructor: 'David Clark',
      rating: 4.8,
      students: 950,
      description: 'Comprehensive introduction to cybersecurity principles and best practices',
      price: 59.99,
      tags: ['Cybersecurity', 'Risk Management', 'Security Basics'],
      level: 'Beginner',
      duration: '5 weeks',
    },
    {
      id: 4,
      title: 'Advanced Threat Detection',
      image: '/images/threat-detection.jpg',
      instructor: 'Sarah Wilson',
      rating: 4.9,
      students: 680,
      description: 'Learn advanced techniques for detecting and mitigating security threats',
      price: 79.99,
      tags: ['Threat Detection', 'SIEM', 'Incident Response'],
      level: 'Advanced',
      duration: '10 weeks',
    },
  ];

  const securityTopics = [
    {
      icon: <FaLock className="w-8 h-8" />,
      title: 'Application Security',
      description: 'Learn to secure web and mobile applications from vulnerabilities',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Network Security',
      description: 'Protect networks from unauthorized access and attacks',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <FaBug className="w-8 h-8" />,
      title: 'Vulnerability Assessment',
      description: 'Identify and remediate security vulnerabilities in systems',
      color: 'bg-green-100 text-green-600',
    },
  ];

  const certifications = [
    {
      name: 'CompTIA Security+',
      description: 'Foundation-level security certification',
      icon: <FaCertificate className="w-6 h-6 text-yellow-500" />,
    },
    {
      name: 'CEH',
      description: 'Certified Ethical Hacker',
      icon: <FaCertificate className="w-6 h-6 text-red-500" />,
    },
    {
      name: 'CISSP',
      description: 'Certified Information Systems Security Professional',
      icon: <FaCertificate className="w-6 h-6 text-blue-500" />,
    },
  ];

  const stats = [
    { value: '12+', label: 'Courses' },
    { value: '2500+', label: 'Students' },
    { value: '4.8', label: 'Avg Rating' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-8 md:mb-0 md:mr-10">
              <FaShieldAlt className="text-4xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Cyber Security</h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Master the art of protecting systems and networks from digital attacks
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

      {/* What You'll Learn Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What You'll Learn
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${topic.color}`}>
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;