import React from 'react';
import { FaStar, FaUsers, FaTrophy, FaAward, FaMedal, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CourseCard from '../components/course/CourseCard';

const TopRatedPage = () => {
  const topRatedCourses = [
    {
      id: 'top-001',
      title: 'Complete Web Development Bootcamp',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
      description: 'Comprehensive web development course from zero to expert. Master HTML, CSS, JavaScript, React, Node.js and more.',
      price: 89.99,
      rating: 4.9,
      reviews: 15000,
      students: 150000,
      duration: '12 weeks',
      level: 'All Levels',
      instructor: 'Angela Yu',
      badge: 'Best Seller',
      learningOutcomes: [
        'Build responsive websites with HTML5 and CSS3',
        'Master JavaScript and modern ES6+ features',
        'Create full-stack applications with React and Node.js',
        'Deploy applications to the cloud',
      ],
      modules: [
        {
          title: 'Frontend Fundamentals',
          lessons: [
            'HTML5 and CSS3 Mastery',
            'JavaScript Deep Dive',
            'Responsive Design',
          ],
        },
        {
          title: 'Backend Development',
          lessons: [
            'Node.js and Express',
            'Database Integration',
            'API Development',
          ],
        },
      ],
    },
    {
      id: 'top-002',
      title: 'Python for Data Science and ML',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
      description: 'Master Python for data science and machine learning. Learn pandas, numpy, scikit-learn, and more.',
      price: 79.99,
      rating: 4.8,
      reviews: 12000,
      students: 120000,
      duration: '10 weeks',
      level: 'Intermediate',
      instructor: 'Jose Portilla',
      badge: 'Highest Rated',
      learningOutcomes: [
        'Master Python for data analysis',
        'Build machine learning models',
        'Perform data visualization',
        'Work with real-world datasets',
      ],
      modules: [
        {
          title: 'Python Fundamentals',
          lessons: [
            'Python Programming Basics',
            'Data Structures',
            'NumPy and Pandas',
          ],
        },
        {
          title: 'Machine Learning',
          lessons: [
            'Supervised Learning',
            'Unsupervised Learning',
            'Model Evaluation',
          ],
        },
      ],
    },
    {
      id: 'top-003',
      title: 'iOS App Development with Swift',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
      description: 'Learn iOS development and publish your own apps. Master Swift, UIKit, and modern iOS development practices.',
      price: 99.99,
      rating: 4.9,
      reviews: 8000,
      students: 85000,
      duration: '8 weeks',
      level: 'Beginner',
      instructor: 'Ray Wenderlich',
      badge: 'Students Choice',
      learningOutcomes: [
        'Build iOS applications from scratch',
        'Master Swift programming',
        'Work with iOS frameworks',
        'Publish apps to the App Store',
      ],
      modules: [
        {
          title: 'Swift Programming',
          lessons: [
            'Swift Fundamentals',
            'Object-Oriented Programming',
            'Protocol-Oriented Programming',
          ],
        },
        {
          title: 'iOS Development',
          lessons: [
            'UIKit Essentials',
            'App Architecture',
            'Data Persistence',
          ],
        },
      ],
    },
  ];

  const instructorHighlights = [
    {
      name: 'Angela Yu',
      title: 'Lead Instructor',
      rating: 4.9,
      students: 500000,
      courses: 12,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
      specialty: 'Web Development',
    },
    {
      name: 'Jose Portilla',
      title: 'Data Science Expert',
      rating: 4.8,
      students: 450000,
      courses: 15,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
      specialty: 'Data Science',
    },
  ];

  const ratingCriteria = [
    {
      icon: <FaStar className="w-8 h-8" />,
      title: 'Student Ratings',
      description: 'Consistently high ratings from students',
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Student Success',
      description: 'Proven track record of student achievements',
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: 'Content Quality',
      description: 'High-quality, comprehensive content',
    },
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: 'Instructor Excellence',
      description: 'Expert instructors with proven expertise',
    },
  ];

  const testimonials = [
    {
      rating: 5,
      quote: '"The best investment I\'ve made in my career. The course content is comprehensive and up-to-date."',
      name: 'John D.',
      course: 'Web Development Bootcamp',
    },
    {
      rating: 5,
      quote: '"Excellent course structure and amazing support from the instructor. Highly recommended!"',
      name: 'Sarah M.',
      course: 'Python for Data Science',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-8 md:mb-0 md:mr-10">
              <FaTrophy className="text-4xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Top Rated Courses</h1>
              <p className="text-xl text-yellow-100 max-w-2xl">
                Learn from the highest rated courses taught by industry-leading instructors
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Rated Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Highest Rated Courses</h2>
              <p className="text-lg text-gray-600">
                Exceptional courses with proven success and outstanding student feedback
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topRatedCourses.map((course) => (
                <div key={course.id} className="relative">
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center z-10">
                    <FaStar className="mr-1" /> {course.badge}
                  </div>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rating Criteria Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Makes a Course Top Rated?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ratingCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 mx-auto mb-6">
                    {criteria.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{criteria.title}</h3>
                  <p className="text-gray-600">{criteria.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Top Instructors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {instructorHighlights.map((instructor, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                      <p className="text-gray-600 mb-4">{instructor.title} • {instructor.specialty}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-6">
                          <FaStar className="text-yellow-400 mr-2" />
                          <span className="font-medium">{instructor.rating} Rating</span>
                        </div>
                        <div className="flex items-center">
                          <FaUsers className="text-gray-400 mr-2" />
                          <span>{instructor.students.toLocaleString()} Students</span>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-6">
                        <div className="flex items-center">
                          <FaAward className="text-yellow-500 mr-2" />
                          <span className="font-medium">{instructor.courses} Top Rated Courses</span>
                        </div>
                      </div>
                      
                      <a
                        href={`/instructor/${instructor.name.replace(' ', '-').toLowerCase()}`}
                        className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                      >
                        View Instructor Profile <FaArrowRight className="ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-3">By {course.instructor}</p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-4">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">({course.reviews.toLocaleString()})</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaUsers className="mr-1" /> {course.students.toLocaleString()}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold text-gray-900">${course.price}</span>
                      <a
                        href={`/course/${course.id}`}
                        className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                      >
                        Learn More <FaArrowRight className="ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Our Students Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
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
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Start Learning From the Best</h2>
            <p className="text-xl text-yellow-100 mb-8">
              Join thousands of students who have transformed their careers with our top-rated courses
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/signup"
                className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
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

export default TopRatedPage;