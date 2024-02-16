// const mongoose = require('mongoose');

// const noteSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   deadline: {
//     type: Date,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'in-progress', 'completed'],
//     default: 'pending'
//   }
// });

// module.exports = mongoose.model('Note', noteSchema);


const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
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
    enum: ['todo', 'inProgress', 'completed'],
    default: 'todo'
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
