const mongoose = require('mongoose');

// Define the schema
const ImageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  }
});

// Create a model using the schema
const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;

