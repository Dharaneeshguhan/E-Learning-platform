import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaUsers, FaLock, FaBook, FaVideo, FaClock, FaDownload } from 'react-icons/fa';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [notes, setNotes] = useState('');

  // Simulated course data - replace with actual API call
  useEffect(() => {
    // This would be an API call in a real application
    setCourse({
      id,
      title: 'Web Development Fundamentals',
      instructor: 'John Doe',
      rating: 4.5,
      students: 1200,
      price: 49.99,
      isPaid: true,
      description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript.',
      preview: 'https://example.com/preview-video.mp4',
      content: [
        {
          id: 1,
          title: 'Introduction to HTML',
          duration: '45 min',
          isLocked: true
        },
        {
          id: 2,
          title: 'CSS Basics',
          duration: '60 min',
          isLocked: true
        },
        {
          id: 3,
          title: 'JavaScript Fundamentals',
          duration: '90 min',
          isLocked: true
        }
      ],
      materials: [
        { id: 1, name: 'Course Slides', type: 'PDF' },
        { id: 2, name: 'Exercise Files', type: 'ZIP' }
      ]
    });
  }, [id]);

  const handleEnroll = () => {
    if (course?.isPaid) {
      // Handle payment process
      // This would integrate with a payment gateway in a real application
      alert('Redirecting to payment gateway...');
    } else {
      setIsEnrolled(true);
    }
  };

  const handleSaveNotes = () => {
    // Save notes to localStorage or backend
    localStorage.setItem(`course-${id}-notes`, notes);
    alert('Notes saved successfully!');
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" /> {course.rating}
            </span>
            <span className="flex items-center">
              <FaUsers className="text-gray-400 mr-1" /> {course.students} students
            </span>
            <span>By {course.instructor}</span>
          </div>
          {!isEnrolled && (
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-primary">
                {course.isPaid ? `$${course.price}` : 'Free'}
              </div>
              <button
                onClick={handleEnroll}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                {course.isPaid ? 'Buy Now' : 'Enroll Now'}
              </button>
            </div>
          )}
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={activeTab === 'overview' ? 'px-6 py-3 text-sm font-medium text-primary border-b-2 border-primary' : 'px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700'}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('content')}
                  className={activeTab === 'content' ? 'px-6 py-3 text-sm font-medium text-primary border-b-2 border-primary' : 'px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700'}
                >
                  Course Content
                </button>
                {isEnrolled && (
                  <button
                    onClick={() => setActiveTab('notes')}
                    className={activeTab === 'notes' ? 'px-6 py-3 text-sm font-medium text-primary border-b-2 border-primary' : 'px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700'}
                  >
                    My Notes
                  </button>
                )}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">About This Course</h3>
                    <p className="text-gray-600">You have full access to this course. Start learning now!</p>
                    {!isEnrolled && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Preview Available</h4>
                        <video
                          className="w-full rounded-lg"
                          controls
                          src={course.preview}
                          poster="/preview-thumbnail.jpg"
                        />
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'content' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Course Content</h3>
                    <div className="space-y-3">
                      {course.content.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center">
                            {item.isLocked && !isEnrolled ? (
                              <FaLock className="text-gray-400 mr-3" />
                            ) : (
                              <FaVideo className="text-primary mr-3" />
                            )}
                            <span className="text-gray-700">{item.title}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <FaClock className="mr-1" />
                            {item.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'notes' && isEnrolled && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">My Notes</h3>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full h-64 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Take notes here..."
                    />
                    <button
                      onClick={handleSaveNotes}
                      className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Save Notes
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Course Materials</h3>
              <div className="space-y-3">
                {course.materials.map((material) => (
                  <div
                    key={material.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-700">{material.name}</span>
                    {isEnrolled ? (
                      <button className="text-primary hover:text-primary-dark">
                        <FaDownload />
                      </button>
                    ) : (
                      <FaLock className="text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
