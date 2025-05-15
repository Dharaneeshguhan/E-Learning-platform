import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB Connection Failed:', err.message);
    process.exit(1);
  });

// Models
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: 'student' },
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  createdAt: { type: Date, default: Date.now }
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  instructor: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  studentsEnrolled: { type: Number, default: 0 },
  level: { type: String, required: true },
  duration: { type: Number, required: true },
  modules: [{
    title: { type: String, required: true },
    description: { type: String },
    duration: { type: Number },
    content: { type: String }
  }],
  learningOutcomes: [{ type: String }],
  requirements: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);

// Cart Schema
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    addedAt: { type: Date, default: Date.now }
  }],
  updatedAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', cartSchema);

// Auth Middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ success: false, message: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(401).json({ success: false, message: 'User not found' });

    req.user = user;
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Please authenticate' });
  }
};

// Routes

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, message: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(201).json({
      success: true,
      data: {
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role }
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message || 'Failed to create account' });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({
      success: true,
      data: {
        token,
        user: { id: user._id, name: user.name, email: user.email, role: user.role }
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message || 'Login failed' });
  }
});

// Get Authenticated User
app.get('/api/auth/me', auth, (req, res) => {
  res.json({
    success: true,
    data: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

// Get All Courses
app.get('/api/courses', async (req, res) => {
  try {
    const { category, search, sort } = req.query;
    const query = {};
    if (category) query.category = category;
    if (search) query.title = new RegExp(search, 'i');

    const sortOption = {};
    if (sort === 'rating') sortOption.rating = -1;
    else if (sort === 'popular') sortOption.studentsEnrolled = -1;
    else if (sort === 'price') sortOption.price = 1;

    const courses = await Course.find(query).sort(sortOption);
    res.json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get Single Course
app.get('/api/courses/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });

    res.json({ success: true, data: course });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
});

// Enroll in Course
// Cart Routes

// Get user's cart
app.get('/api/cart', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.course');
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
      await cart.save();
    }
    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Add item to cart
app.post('/api/cart/add', auth, async (req, res) => {
  try {
    const { courseId } = req.body;
    if (!courseId) {
      return res.status(400).json({ success: false, message: 'Course ID is required' });
    }

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    // Get or create cart
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    // Check if course is already in cart
    const isInCart = cart.items.some(item => item.course.toString() === courseId);
    if (isInCart) {
      return res.status(400).json({ success: false, message: 'Course already in cart' });
    }

    // Add course to cart
    cart.items.push({ course: courseId });
    cart.updatedAt = new Date();
    await cart.save();

    // Return populated cart
    cart = await Cart.findById(cart._id).populate('items.course');
    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Remove item from cart
app.delete('/api/cart/remove/:courseId', auth, async (req, res) => {
  try {
    const { courseId } = req.params;
    let cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.course.toString() !== courseId);
    cart.updatedAt = new Date();
    await cart.save();

    // Return populated cart
    cart = await Cart.findById(cart._id).populate('items.course');
    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Clear cart
app.delete('/api/cart/clear', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    cart.items = [];
    cart.updatedAt = new Date();
    await cart.save();

    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/courses/enroll', auth, async (req, res) => {
  try {
    const { courseId } = req.body;
    const user = req.user;

    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).json({ success: false, message: 'Already enrolled in this course' });
    }

    user.purchasedCourses.push(courseId);
    await user.save();

    const course = await Course.findById(courseId);
    course.studentsEnrolled += 1;
    await course.save();

    res.json({ success: true, message: 'Successfully enrolled' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Get User's Enrolled Courses
app.get('/api/user/courses', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('purchasedCourses');
    res.json({ success: true, data: user.purchasedCourses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
