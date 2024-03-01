const { Schema, model, default: mongoose } = require("mongoose");

const rutineSchema = new Schema({
    start: Date,
    end: Date,
    title: String,
    forCourses: {
        type: String,
        required: true,
    },
    teacherName: {
        type: String,
        required: true,
    },
    liveLink: {
        type: String,
        required: false,
    },
    teacherEmail: {
        type: String,
        required: true,
    },
     liveLink: {
        type: String,
        required: false,
    },
}, { versionKey: false });

const Rutine = mongoose.model('Rutines', rutineSchema);
module.exports = Rutine;