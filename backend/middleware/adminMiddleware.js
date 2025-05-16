import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/User.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

export const protectAdmin = catchAsync(async (req, res, next) => {
  try {
    // 1) Getting token
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      console.log('No admin token found in request');
      return next(new AppError('Admin access denied. Please log in as admin.', 401));
    }

    // 2) Verify token
    try {
      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
      console.log('Admin token verified successfully');

      // 3) Check if user exists and is admin
      const admin = await User.findById(decoded.id);
      if (!admin || !admin.isAdmin) {
        console.log('User not found or not admin');
        return next(new AppError('Admin access denied.', 401));
      }

      // GRANT ACCESS TO PROTECTED ROUTE
      req.user = admin;
      next();
    } catch (err) {
      console.error('Admin token verification failed:', err.message);
      return next(new AppError('Invalid admin token! Please log in again.', 401));
    }
  } catch (error) {
    console.error('Admin authentication error:', error);
    return next(new AppError('Something went wrong! Please try again.', 500));
  }
});
