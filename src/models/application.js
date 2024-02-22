const { model, Schema } = require("mongoose");

const applicationScema = new Schema({
    id: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
     gradePoint: {
        type: Number,
        required: true,
    },
    passedYear: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    instituteName: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
      },
    message: {
        type: String,
        required: true,
    },
    cvLink: {
        type: String,
        required: true,
    },
    profile_photo: {
        type: String,
        required: true,
    },
}, { versionKey: false })

const Application = model('Application', applicationScema);
module.exports = Application;