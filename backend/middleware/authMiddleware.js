import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/User.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

export const protect = catchAsync(async (req, res, next) => {
  try {
    // 1) Getting token from various possible sources
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      console.log('No token found in request');
      return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    console.log('Token found:', token.substring(0, 10) + '...');

    // 2) Verify token
    try {
      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
      console.log('Token verified successfully');

      // 3) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        console.log('User not found for token');
        return next(new AppError('The user belonging to this token does not exist.', 401));
      }

      // 4) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        console.log('Password was changed after token issue');
        return next(new AppError('User recently changed password! Please log in again.', 401));
      }

      console.log('Authentication successful for user:', currentUser.email);
      // GRANT ACCESS TO PROTECTED ROUTE
      req.user = currentUser;
      next();
    } catch (err) {
      console.error('Token verification failed:', err.message);
      return next(new AppError('Invalid token! Please log in again.', 401));
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return next(new AppError('Authentication failed. Please try again.', 500));
  }
});

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'instructor']
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }

    next();
  };
};
