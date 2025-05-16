import Course from '../models/Course.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

// Get all courses with filtering, sorting, and pagination
export const getAllCourses = catchAsync(async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(field => delete queryObj[field]);

    // Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let query = Course.find(JSON.parse(queryStr));

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    // Execute query
    const courses = await query;
    const total = await Course.countDocuments(JSON.parse(queryStr));

    res.status(200).json({
      status: 'success',
      results: courses.length,
      total,
      data: courses
    });
  } catch (error) {
    console.error('Error in getAllCourses:', error);
    next(error);
  }
});

// Get single course
export const getCourse = catchAsync(async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return next(new AppError('Course not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: course
    });
  } catch (error) {
    console.error('Error in getCourse:', error);
    next(error);
  }
});

// Create new course
export const createCourse = catchAsync(async (req, res, next) => {
  console.log('Request body:', req.body);
  console.log('Request user:', req.user);
  console.log('Auth header:', req.headers.authorization);

  // Check if user exists in request
  if (!req.user) {
    console.error('No user found in request');
    return next(new AppError('Authentication required', 401));
  }

  // Check if user has permission
  if (!['admin', 'instructor'].includes(req.user.role)) {
    console.error(`Invalid role: ${req.user.role}`);
    return next(new AppError('You do not have permission to create courses', 403));
  }

  // Validate required fields
  const requiredFields = ['title', 'instructor', 'description', 'category', 'difficulty', 'duration', 'capacity'];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      console.error(`Missing field: ${field}`);
      return next(new AppError(`Missing required field: ${field}`, 400));
    }
  }

  try {
    // Convert numeric fields
    const courseData = {
      ...req.body,
      duration: Number(req.body.duration),
      capacity: Number(req.body.capacity),
      price: req.body.isPaid ? Number(req.body.price) : 0,
      createdBy: req.user._id
    };

    console.log('Processed course data:', courseData);

    const course = await Course.create(courseData);
    console.log('Course created successfully:', course);

    res.status(201).json({
      status: 'success',
      data: course
    });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return next(new AppError('Failed to create course: ' + error.message, 400));
  }
});

// Update course
export const updateCourse = catchAsync(async (req, res, next) => {
  console.log('Update request body:', req.body);
  console.log('Request user:', req.user);

  // Check if user exists in request
  if (!req.user) {
    console.error('No user found in request');
    return next(new AppError('Authentication required', 401));
  }

  // Check if user has permission
  if (!['admin', 'instructor'].includes(req.user.role)) {
    console.error(`Invalid role: ${req.user.role}`);
    return next(new AppError('You do not have permission to update courses', 403));
  }

  // Get the existing course
  const existingCourse = await Course.findById(req.params.id);
  if (!existingCourse) {
    return next(new AppError('Course not found', 404));
  }

  // Check if user is the course creator or admin
  if (req.user.role !== 'admin' && existingCourse.createdBy.toString() !== req.user._id.toString()) {
    return next(new AppError('You do not have permission to update this course', 403));
  }

  // Validate required fields if they are being updated
  const requiredFields = ['title', 'instructor', 'description', 'category', 'difficulty', 'duration', 'capacity'];
  for (const field of requiredFields) {
    if (field in req.body && !req.body[field]) {
      console.error(`Missing field: ${field}`);
      return next(new AppError(`Missing required field: ${field}`, 400));
    }
  }

  try {
    // Convert numeric fields if they are being updated
    const updateData = { ...req.body };
    if ('duration' in updateData) updateData.duration = Number(updateData.duration);
    if ('capacity' in updateData) updateData.capacity = Number(updateData.capacity);
    if ('price' in updateData) updateData.price = updateData.isPaid ? Number(updateData.price) : 0;

    console.log('Processed update data:', updateData);

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    console.log('Course updated successfully:', course);

    res.status(200).json({
      status: 'success',
      data: course
    });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return next(new AppError('Failed to update course: ' + error.message, 400));
  }
});

// Delete course
export const deleteCourse = catchAsync(async (req, res, next) => {
  const course = await Course.findByIdAndDelete(req.params.id);

  if (!course) {
    return next(new AppError('Course not found', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

// Search courses
export const searchCourses = catchAsync(async (req, res, next) => {
  const { query } = req.query;
  
  const courses = await Course.find(
    { $text: { $search: query } },
    { score: { $meta: 'textScore' } }
  )
    .sort({ score: { $meta: 'textScore' } })
    .limit(10);

  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: courses
  });
});

// Get courses by category
export const getCoursesByCategory = catchAsync(async (req, res, next) => {
  const { category } = req.params;
  
  const courses = await Course.find({ category })
    .sort('-createdAt')
    .limit(10);

  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: courses
  });
});

// Get featured courses
export const getFeaturedCourses = catchAsync(async (req, res, next) => {
  const courses = await Course.find({ status: 'published' })
    .sort('-enrolledStudents')
    .limit(6);

  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: courses
  });
});
