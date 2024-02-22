const mongoose = require('mongoose');

const partnerApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  profile_photo: {
    type: String,
    required: true
  }
}, { timestamps: true, versionKey: false } );

const Partner = mongoose.model('Partner', partnerApplicationSchema);

module.exports = Partner;
