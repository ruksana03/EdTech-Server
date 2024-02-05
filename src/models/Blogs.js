const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    required: true,
  },
  comment_text: {
    type: String,
    required: true,
  },
});

const BlogSchema = new Schema({
  
  id: {
    type: Number,
    required: true,
  },
  host_user: {
    type: String,
    required: true,
  },
  host_email: {
    type: String,
    required: true,
  },
  host_image: {
    type: String,
    required: true,
  },
  post_image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  comments: [CommentSchema],  
});

const Blog = model('Blog', BlogSchema);
module.exports = Blog;
