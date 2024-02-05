const { Schema, model } = require('mongoose');

const videoSchema = new Schema({
    videoTitle: {
        type: String,
        required: true,
    },
    videoLink: {
        type: String,
        required: true,
    },
});

const RecordedSchema = new  Schema({
    courseName: {
        type: String,
        required: true,
    },
    courseImage: {
        type: String,
        required: true,
    },
    courseTeacher: {
        type: String,
        required: true,
    },
    data: [videoSchema],
},{ versionKey: false });

const Recorded =  model('Recorded', RecordedSchema);

module.exports = Recorded;
