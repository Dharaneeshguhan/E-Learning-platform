import React from 'react';
import { FaGraduationCap, FaClock, FaStar, FaBookmark, FaBell, FaChartLine } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const DashboardHome = () => {
  const { user } = useAuth();

  // Mock data (replace with API calls)
  const enrolledCourses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      progress: 75,
      lastAccessed: '2 days ago',
      nextLesson: 'CSS Flexbox Layout',
    },
    {
      id: 2,
      title: 'Python Programming',
      progress: 30,
      lastAccessed: '1 week ago',
      nextLesson: 'Functions and Methods',
    },
  ];

  const stats = [
    {
      icon: <FaGraduationCap />,
      label: 'Courses',
      value: '4',
    },
    {
      icon: <FaClock />,
      label: 'Learning Hours',
      value: '26',
    },
    {
      icon: <FaStar />,
      label: 'Certificates',
      value: '2',
    },
  ];

  const notifications = [
    {
      id: 1,
      type: 'reminder',
      message: 'Continue your Web Development course',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'achievement',
      message: 'Completed Python Basics module',
      time: '1 day ago',
    },
  ];

  const recommendations = [
    {
      id: 1,
      title: 'JavaScript Advanced Concepts',
      rating: 4.8,
      students: 2500,
      image: '/images/javascript.jpg',
    },
    {
      id: 2,
      title: 'React.js Masterclass',
      rating: 4.9,
      students: 3200,
      image: '/images/react.jpg',
    },
  ];

  return (
    <div className="dashboard-home">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome back, {user?.name}!</h1>
          <p>Ready to continue learning?</p>
        </div>
        <div className="stats-cards">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Enrolled Courses */}
        <div className="dashboard-section enrolled-courses">
          <div className="section-header">
            <h2>My Courses</h2>
            <a href="/courses" className="view-all">
              View All
            </a>
          </div>
          <div className="courses-list">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="course-progress-card">
                <h3>{course.title}</h3>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="course-meta">
                  <span>Progress: {course.progress}%</span>
                  <span>Last accessed: {course.lastAccessed}</span>
                </div>
                <div className="next-lesson">
                  <p>Next: {course.nextLesson}</p>
                  <a
                    href={`/course/${course.id}`}
                    className="button primary small"
                  >
                    Continue
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Activity */}
        <div className="dashboard-section activity">
          <div className="section-header">
            <h2>Learning Activity</h2>
            <FaChartLine />
          </div>
          <div className="activity-chart">
            {/* Add chart component here */}
            <div className="placeholder-chart">
              Weekly Learning Progress Chart
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="dashboard-section notifications">
          <div className="section-header">
            <h2>Notifications</h2>
            <FaBell />
          </div>
          <div className="notifications-list">
            {notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <div className="notification-content">
                  <p>{notification.message}</p>
                  <span className="time">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="dashboard-section recommendations">
          <div className="section-header">
            <h2>Recommended for You</h2>
            <FaBookmark />
          </div>
          <div className="recommendations-grid">
            {recommendations.map((course) => (
              <div key={course.id} className="recommendation-card">
                <img src={course.image} alt={course.title} />
                <div className="recommendation-content">
                  <h3>{course.title}</h3>
                  <div className="meta">
                    <span className="rating">
                      <FaStar /> {course.rating}
                    </span>
                    <span className="students">{course.students} students</span>
                  </div>
                  <a
                    href={`/course/${course.id}`}
                    className="button secondary small"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
