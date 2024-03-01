const { Schema, model } = require("mongoose");

const memberSchema = new Schema({
    memberName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    portfolio: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    }
});

const Member = model('Member', memberSchema);
module.exports = Member;