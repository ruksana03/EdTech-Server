const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseVideoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course', // Assuming the course model is named 'Course'
    required: true
  },
  videos: [
    {
      title: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
    }
  ]
}, { versionKey: false });

const CourseVideo = mongoose.model('CourseVideo', CourseVideoSchema);
module.exports = CourseVideo;

