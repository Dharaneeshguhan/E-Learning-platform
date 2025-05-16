import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { protectAdmin } from '../middleware/adminMiddleware.js';
import * as authController from '../controllers/authController.js';

const router = express.Router();

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/forgot-password', authController.forgotPassword);
router.patch('/reset-password/:token', authController.resetPassword);

// Admin routes
router.post('/admin/login', authController.adminLogin);
router.get('/admin/verify', protectAdmin, (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Admin token is valid'
  });
});

// Protected user routes
router.use(protect);
router.get('/verify', authController.verifyToken);
router.patch('/update-password', authController.updatePassword);
router.get('/me', authController.getMe);
router.patch('/update-me', authController.updateMe);

export default router;
