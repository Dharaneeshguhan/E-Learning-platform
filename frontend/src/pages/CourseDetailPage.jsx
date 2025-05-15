import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaUsers, FaClock, FaBookmark, FaDownload, FaLock, FaPlay } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const CourseDetailPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [activeModule, setActiveModule] = useState(0);

  // Mock course data (replace with API call)
  const course = {
    id,
    title: 'Web Development Fundamentals',
    instructor: 'John Doe',
    rating: 4.5,
    students: 1200,
    duration: '20 hours',
    price: 49.99,
    description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript. This comprehensive course will take you from beginner to proficient developer.',
    image: '/images/web-dev.jpg',
    modules: [
      {
        id: 1,
        title: 'Introduction to HTML',
        duration: '2h 30m',
        completed: true,
        lessons: [
          { id: 1, title: 'HTML Basics', duration: '45m', completed: true },
          { id: 2, title: 'HTML Structure', duration: '45m', completed: true },
          { id: 3, title: 'Forms and Input', duration: '60m', completed: true },
        ],
      },
      {
        id: 2,
        title: 'CSS Fundamentals',
        duration: '3h',
        completed: false,
        lessons: [
          { id: 4, title: 'CSS Selectors', duration: '45m', completed: false },
          { id: 5, title: 'Box Model', duration: '45m', completed: false },
          { id: 6, title: 'Flexbox Layout', duration: '45m', completed: false },
          { id: 7, title: 'CSS Grid', duration: '45m', completed: false },
        ],
      },
    ],
    resources: [
      { id: 1, title: 'Course Slides', type: 'PDF' },
      { id: 2, title: 'Code Examples', type: 'ZIP' },
      { id: 3, title: 'Project Files', type: 'ZIP' },
    ],
  };

  const isEnrolled = true; // Replace with actual enrollment check
  const isFree = false; // Replace with actual course price check

  const handleEnroll = () => {
    // Implement enrollment logic
    console.log('Enrolling in course:', id);
  };

  const calculateProgress = () => {
    const totalLessons = course.modules.reduce(
      (acc, module) => acc + module.lessons.length,
      0
    );
    const completedLessons = course.modules.reduce(
      (acc, module) =>
        acc + module.lessons.filter((lesson) => lesson.completed).length,
      0
    );
    return Math.round((completedLessons / totalLessons) * 100);
  };

  return (
    <div className="course-detail-page">
      <div className="course-header">
        <div className="course-info">
          <h1>{course.title}</h1>
          <div className="meta-info">
            <span>
              <FaStar className="icon" /> {course.rating}
            </span>
            <span>
              <FaUsers className="icon" /> {course.students} students
            </span>
            <span>
              <FaClock className="icon" /> {course.duration}
            </span>
          </div>
          <p className="instructor">Created by {course.instructor}</p>
        </div>

        <div className="enrollment-section">
          {!isEnrolled ? (
            <>
              <h3>{isFree ? 'Free Course' : `$${course.price}`}</h3>
              <button className="button primary" onClick={handleEnroll}>
                Enroll Now
              </button>
            </>
          ) : (
            <div className="progress-section">
              <h3>Your Progress</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
              <p>{calculateProgress()}% Complete</p>
            </div>
          )}
        </div>
      </div>

      <div className="course-content">
        <div className="content-section">
          <h2>Course Content</h2>
          <div className="modules-list">
            {course.modules.map((module, index) => (
              <div
                key={module.id}
                className={`module-item ${
                  index === activeModule ? 'active' : ''
                } ${module.completed ? 'completed' : ''}`}
              >
                <div
                  className="module-header"
                  onClick={() => setActiveModule(index)}
                >
                  <div className="module-info">
                    <h3>{module.title}</h3>
                    <span className="duration">
                      <FaClock /> {module.duration}
                    </span>
                  </div>
                  {module.completed && (
                    <span className="completion-badge">✓</span>
                  )}
                </div>
                {index === activeModule && (
                  <div className="lessons-list">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className={`lesson-item ${
                          lesson.completed ? 'completed' : ''
                        }`}
                      >
                        <div className="lesson-info">
                          <FaPlay className="icon" />
                          <span>{lesson.title}</span>
                          <span className="duration">{lesson.duration}</span>
                        </div>
                        {!isEnrolled && !isFree && (
                          <FaLock className="lock-icon" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="resources-section">
          <h2>Course Resources</h2>
          <div className="resources-list">
            {course.resources.map((resource) => (
              <div key={resource.id} className="resource-item">
                <div className="resource-info">
                  <FaBookmark className="icon" />
                  <span>{resource.title}</span>
                  <span className="type">{resource.type}</span>
                </div>
                <button className="download-button">
                  <FaDownload />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
