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
    teacherEmail: {
        type: String,
        required: true,
    },
//    link schema 
}, { versionKey: false });

const Rutine = mongoose.model('Rutines', rutineSchema);
module.exports = Rutine;