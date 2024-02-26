const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    name: String,
    photo:  String,
  }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
