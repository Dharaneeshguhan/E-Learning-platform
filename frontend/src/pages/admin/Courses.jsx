import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import CourseForm from '../../components/admin/CourseForm';
import { courseService } from '../../services/courseService';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [currentCourse, setCurrentCourse] = useState({
    title: '',
    instructor: '',
    description: '',
    category: '',
    difficulty: '',
    duration: 1,
    capacity: 1,
    isPaid: false,
    price: 0
  });

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await courseService.getAllCourses();
      if (result.success) {
        setCourses(result.data);
      } else {
        console.error('Failed to fetch courses:', result.error);
      }
    };
    fetchCourses();
  }, []);

  // Sample course data for reference
  /*const sampleCourses = [
      {
        id: 1,
        title: 'Introduction to React',
        instructor: 'John Doe',
        description: 'Learn the fundamentals of React.js',
        category: 'Web Development',
        difficulty: 'Beginner',
        duration: '8',
        capacity: '30',
        isPaid: true,
        price: '49.99'
      },
      {
        id: 2,
        title: 'Advanced JavaScript',
        instructor: 'Jane Smith',
        description: 'Master advanced JavaScript concepts',
        category: 'Web Development',
        difficulty: 'Advanced',
        duration: '10',
        capacity: '25',
        isPaid: false,
        price: '0'
      },
    ];*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', currentCourse);
    
    try {
      // Validate required fields
      const requiredFields = ['title', 'instructor', 'description', 'category', 'difficulty', 'duration', 'capacity'];
      for (const field of requiredFields) {
        if (!currentCourse[field]) {
          console.error(`Missing required field: ${field}`);
          alert(`Please fill in the ${field} field`);
          return;
        }
      }

      if (editingCourse) {
        // Update existing course
        console.log('Updating course:', editingCourse._id);
        const result = await courseService.updateCourse(editingCourse._id, currentCourse);
        console.log('Update result:', result);

        if (result.success) {
          const updatedCourses = courses.map(course =>
            course._id === editingCourse._id ? result.data : course
          );
          setCourses(updatedCourses);
          handleCloseModal();
          alert('Course updated successfully!');
        } else {
          console.error('Failed to update course:', result.error);
          alert(`Failed to update course: ${result.error}`);
        }
      } else {
        // Add new course
        console.log('Creating new course');
        const result = await courseService.createCourse(currentCourse);
        console.log('Create result:', result);

        if (result.success) {
          setCourses([...courses, result.data]);
          handleCloseModal();
          alert('Course created successfully!');
        } else {
          console.error('Failed to create course:', result.error);
          alert(`Failed to create course: ${result.error}`);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setCurrentCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCourse(null);
    setCurrentCourse({
      title: '',
      instructor: '',
      description: '',
      category: '',
      difficulty: '',
      duration: 1,
      capacity: 1,
      isPaid: false,
      price: 0
    });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setCurrentCourse(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleDeleteCourse = async (id) => {
    try {
      const result = await courseService.deleteCourse(id);
      if (result.success) {
        setCourses(courses.filter(course => course._id !== id));
      } else {
        console.error('Failed to delete course:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Course Management</h2>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <FaPlus className="w-4 h-4" />
          <span>Add New Course</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Instructor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Difficulty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {courses.map(course => (
                <tr key={course._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{course.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{course.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{course.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{course.instructor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{course.duration} weeks</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}
                    >
                      {course.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {course.isPaid ? (
                      <span className="text-sm text-gray-900 dark:text-white">${course.price}</span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        Free
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                    <button
                      onClick={() => handleEdit(course)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course._id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {editingCourse ? 'Edit Course' : 'Add New Course'}
            </h3>
            <CourseForm
              course={currentCourse}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onCancel={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
