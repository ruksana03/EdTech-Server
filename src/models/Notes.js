const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Note', noteSchema);
