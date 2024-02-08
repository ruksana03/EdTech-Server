const { Schema, model } = require('mongoose');

// const CommentSchema = new Schema({
  // user_name: {
//     type: String,
//     required: true,
//   },
//   user_email: {
//     type: String,
//     required: true,
//   },
//   profile_image: {
//     type: String,
//     required: true,
//   },
//   comment_text: {
//     type: String,
//     required: true,
//   },
// });

const BlogSchema = new Schema({


  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
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
