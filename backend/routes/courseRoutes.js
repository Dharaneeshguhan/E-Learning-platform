import express from 'express';
import * as courseController from '../controllers/courseController.js';
import { protectAdmin } from '../middleware/adminMiddleware.js';

const router = express.Router();

// Public routes (specific routes first)
router.get('/featured', courseController.getFeaturedCourses);
router.get('/search', courseController.searchCourses);
router.get('/category/:category', courseController.getCoursesByCategory);

// Dynamic routes
router
  .route('/:id')
  .get(courseController.getCourse)
  .patch(protectAdmin, courseController.updateCourse)
  .delete(protectAdmin, courseController.deleteCourse);

// Root route
router
  .route('/')
  .get(courseController.getAllCourses)
  .post(protectAdmin, courseController.createCourse);

export default router;
