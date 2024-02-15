const { Schema, model } = require('mongoose');


const BlogSchema = new Schema({


  title: {
    type: String,
    required: true
  },
  contents: {
    type: [{
      id: Number,
      value: String
    }],
    required: true
  },
  tags: [String],
  imageUrl: String,
  userPhoto: String,
  userName: String,
  userEmail: String,
  postTime: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false });

const Blog = model('Blog', BlogSchema);
module.exports = Blog;
