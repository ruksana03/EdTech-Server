const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, { versionKey: false });

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
