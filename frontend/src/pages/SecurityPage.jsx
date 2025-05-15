import React, { useState } from 'react';
import { FaShieldAlt, FaStar, FaUsers, FaLock, FaServer, FaBug, FaArrowRight, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CourseCard from '../components/course/CourseCard';

const SecurityPage = () => {
  const securityCourses = [
    {
      id: 'sec-001',
      title: 'Cybersecurity Fundamentals',
      description: 'Learn the basics of cybersecurity, including network security, encryption, and threat detection. Perfect for beginners looking to start their cybersecurity career.',
      price: 49.99,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
      rating: 4.8,
      reviews: 245,
      students: 1823,
      duration: '12 hours',
      level: 'Beginner',
      learningOutcomes: [
        'Understand basic cybersecurity concepts',
        'Learn about common cyber threats',
        'Implement basic security measures',
        'Understand encryption fundamentals',
      ],
    },
    {
      id: 'sec-002',
      title: 'Ethical Hacking Advanced',
      description: 'Master advanced ethical hacking techniques and penetration testing. Learn how to identify and exploit vulnerabilities in systems and networks.',
      price: 79.99,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
      rating: 4.9,
      reviews: 189,
      students: 1245,
      duration: '15 hours',
      level: 'Advanced',
      learningOutcomes: [
        'Perform penetration testing',
        'Identify system vulnerabilities',
        'Use advanced hacking tools',
        'Write security reports',
      ],
    },
    {
      id: 'sec-003',
      title: 'Network Security Specialist',
      description: 'Become a network security specialist. Learn about firewalls, IDS/IPS, VPNs, and network security architecture.',
      price: 69.99,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
      rating: 4.7,
      reviews: 156,
      students: 987,
      duration: '14 hours',
      level: 'Intermediate',
      learningOutcomes: [
        'Configure network security devices',
        'Implement security policies',
        'Monitor network traffic',
        'Respond to security incidents',
      ],
    },
  ];

  const securityCoursesList = [
    {
      id: 1,
      title: 'Ethical Hacking Fundamentals',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
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
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
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
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLzYvLi41ODc6NDVBREE4QDg0PUM1RkZISVlOUE5ETjpLUEM3Slj/2wBDARUXFyAeIR4eIVA1LjVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFD/wAARCACWAJYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAAMEBQIBBgf/xAA5EAACAQMCBAQEBAQFBQAAAAABAgMABBESIQUxQVETImFxBjKBkRShscEjQlLRFSQzYvAWQ3KC4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAAMBAQEBAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AP1GiiivO6iiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiig//9k=',
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

  const careerPaths = [
    {
      title: 'Security Analyst',
      description: 'Monitor and protect organizations from security threats',
      salary: '$75,000 - $120,000',
    },
    {
      title: 'Penetration Tester',
      description: 'Test systems for vulnerabilities and security weaknesses',
      salary: '$90,000 - $140,000',
    },
    {
      title: 'Security Consultant',
      description: 'Advise organizations on security best practices',
      salary: '$100,000 - $160,000',
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
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
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

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Industry Certifications
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Our courses help prepare you for these popular security certifications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    {cert.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{cert.name}</h3>
                  </div>
                  <p className="text-gray-600">{cert.description}</p>
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
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Security Courses</h2>
                <p className="text-lg text-gray-600">Start your cybersecurity journey today</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityCourses.map((course) => (
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
                    <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
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
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="flex items-center mr-4">
                        <FaUsers className="mr-1" /> {course.students.toLocaleString()}
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    
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
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
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

      {/* Career Paths Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Career Opportunities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careerPaths.map((career, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{career.title}</h3>
                  <p className="text-gray-600 mb-4">{career.description}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <p className="text-blue-600 font-medium">Avg. Salary: {career.salary}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Secure Your Future in Cybersecurity</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students building careers in this high-demand field
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/signup"
                className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/courses"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Browse All Security Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Security Courses
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Start your journey in cybersecurity with our expert-led courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Security Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Security Courses?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Learn from industry experts and get practical experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Industry-Relevant Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our courses are regularly updated to reflect the latest security threats and defenses.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Hands-on Labs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Practice in real-world scenarios with our virtual lab environments.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Career Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get guidance on certifications and career paths in cybersecurity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;