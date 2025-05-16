const API_URL = 'http://localhost:8081/api/v1';

const getHeaders = (requiresAuth = false, isAdmin = false) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  if (requiresAuth) {
    const token = isAdmin ? localStorage.getItem('adminToken') : localStorage.getItem('authToken');
    if (!token) {
      throw new Error(isAdmin ? 'No admin token found' : 'No auth token found');
    }
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

export const courseService = {
  // Get all courses
  getAllCourses: async () => {
    try {
      const response = await fetch(`${API_URL}/courses`, {
        headers: getHeaders(false)
      });
      const data = await response.json();
      if (response.ok && data.status === 'success') {
        return { success: true, data: data.data };
      } else {
        console.error('Failed to fetch courses:', data);
        return { success: false, error: data.message || 'Failed to fetch courses' };
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      return { success: false, error: 'Failed to fetch courses' };
    }
  },

  // Create new course
  createCourse: async (courseData) => {
    try {
      console.log('Creating course with data:', courseData);
      
      // Ensure numeric fields are numbers
      const processedData = {
        ...courseData,
        duration: Number(courseData.duration),
        capacity: Number(courseData.capacity),
        price: courseData.isPaid ? Number(courseData.price) : 0
      };

      const headers = getHeaders(true, true);
      console.log('Using headers:', headers);

      const response = await fetch(`${API_URL}/courses`, {
        method: 'POST',
        headers,
        body: JSON.stringify(processedData)
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (data.status === 'success') {
        console.log('Course created successfully:', data.data);
        return { success: true, data: data.data };
      } else {
        console.error('Failed to create course:', data.message);
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error('Error creating course:', error);
      return { success: false, error: 'Failed to create course' };
    }
  },

  // Update course
  updateCourse: async (courseId, courseData) => {
    try {
      console.log('Updating course with data:', courseData);
      
      // Ensure numeric fields are numbers
      const processedData = {
        ...courseData,
        duration: Number(courseData.duration),
        capacity: Number(courseData.capacity),
        price: courseData.isPaid ? Number(courseData.price) : 0
      };

      const headers = getAuthHeaders();
      console.log('Using headers:', headers);

      const response = await fetch(`${API_URL}/courses/${courseId}`, {
        method: 'PATCH',
        headers,
        credentials: 'include',
        body: JSON.stringify(processedData)
      });
      const data = await response.json();
      if (data.status === 'success') {
        return { success: true, data: data.data };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: 'Failed to update course' };
    }
  },

  // Delete course
  deleteCourse: async (courseId) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_URL}/courses/${courseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.status === 'success') {
        return { success: true };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: 'Failed to delete course' };
    }
  }
};
