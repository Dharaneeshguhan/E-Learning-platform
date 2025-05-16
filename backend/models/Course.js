import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
    trim: true
  },
  instructor: {
    type: String,
    required: [true, 'Instructor name is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Course category is required'],
    enum: [
      'Web Development',
      'Mobile Development',
      'Data Science',
      'Machine Learning',
      'DevOps',
      'Cloud Computing',
      'Cybersecurity',
      'Blockchain',
      'UI/UX Design',
      'Digital Marketing'
    ]
  },
  difficulty: {
    type: String,
    required: [true, 'Difficulty level is required'],
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  duration: {
    type: Number,
    required: [true, 'Course duration is required'],
    min: [1, 'Duration must be at least 1 week']
  },
  capacity: {
    type: Number,
    required: [true, 'Course capacity is required'],
    min: [1, 'Capacity must be at least 1']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Course must have a creator']
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 0,
    validate: {
      validator: function(value) {
        return !this.isPaid || (this.isPaid && value > 0);
      },
      message: 'Price must be greater than 0 for paid courses'
    }
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  thumbnail: {
    type: String,
    default: ''
  },
  syllabus: [{
    title: String,
    description: String,
    duration: Number // in minutes
  }]
});

// Update the updatedAt field before saving
courseSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add indexes for better query performance
courseSchema.index({ title: 'text', description: 'text' });
courseSchema.index({ category: 1, difficulty: 1 });
courseSchema.index({ isPaid: 1, price: 1 });
courseSchema.index({ status: 1 });

const Course = mongoose.model('Course', courseSchema);

export default Course;
