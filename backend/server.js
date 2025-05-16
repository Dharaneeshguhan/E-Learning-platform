import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import compression from 'compression';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Load env variables
dotenv.config({ path: '.env' });

// Import routes
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import { protect as auth } from './middleware/authMiddleware.js';

// Initialize express app
const app = express();

// Security headers
app.use(helmet());

// Body parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Enable CORS with specific options
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Allow both Vite and CRA default ports
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Data sanitization
app.use(mongoSanitize());
app.use(xss());

// Compression
app.use(compression());

// Logging in development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Mount routes
app.use('/api/v1/auth', authRoutes); // Auth routes should be before protected routes
app.use('/api/v1/courses', courseRoutes); // Course routes (public and protected handled internally)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Something went wrong!'
  });
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000
    });
    console.log('MongoDB Connected Successfully!');
    return conn;
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    if (err.message.includes('ENOTFOUND') || err.message.includes('ETIMEDOUT')) {
      console.error('Network error: Please check your internet connection');
    } else if (err.message.includes('Authentication failed')) {
      console.error('Authentication error: Please check your MongoDB credentials');
    } else if (err.message.includes('whitelist')) {
      console.error('IP Whitelist error: Please add your current IP to MongoDB Atlas whitelist');
      console.error('Visit: https://cloud.mongodb.com/v2/your-project/security/network/accessList');
    }
    return null;
  }
};

// Initialize database connection with retry
const initDB = async () => {
  let retries = 3;
  while (retries > 0) {
    const conn = await connectDB();
    if (conn) {
      return conn;
    }
    retries--;
    if (retries === 0) {
      console.error('Failed to connect to MongoDB after 3 attempts');
      process.exit(1);
    }
    console.log(`Retrying connection... (${retries} attempts remaining)`);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
};

// Start server only after DB connection
const startServer = async () => {
  try {
    await initDB();
    let port = process.env.PORT || 5000;
    let maxRetries = 10;
    let currentRetry = 0;

    const tryPort = async (p) => {
      try {
        const server = await new Promise((resolve, reject) => {
          const s = app.listen(p, () => resolve(s))
            .on('error', (err) => {
              if (err.code === 'EADDRINUSE') {
                reject(new Error(`Port ${p} is in use`));
              } else {
                reject(err);
              }
            });
        });
        console.log(`Server running on port ${p}...`);
        return true;
      } catch (err) {
        if (err.message.includes('Port') && currentRetry < maxRetries) {
          console.log(`Port ${p} is in use, trying next port...`);
          return false;
        }
        throw err;
      }
    };

    while (currentRetry < maxRetries) {
      if (await tryPort(port)) {
        break;
      }
      port++;
      currentRetry++;
    }

    if (currentRetry >= maxRetries) {
      throw new Error('Could not find an available port after multiple retries');
    }
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

// Mongoose error handlers
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

startServer();

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

initDB();


// Handle undefined routes
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Only show error details in development
  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack
    });
  } else {
    // Production: don't leak error details
    res.status(err.statusCode).json({
      status: err.status,
      message: err.isOperational ? err.message : 'Something went wrong!'
    });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected Successfully!');
}).catch(err => {
  console.log('MongoDB Connection Error:', err.message);
});

// Start server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated!');
    process.exit(0);
  });
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
