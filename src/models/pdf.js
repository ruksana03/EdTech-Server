const { Schema, model } = require("mongoose")

const pdfSchema = new Schema({

    teacherName: {
        type: String,
        required: true
    },
    teacherEmail: {
        type: String,
        required: true
    },

    pdfLink: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
},{ versionKey: false })

const pdfResources = model('pdfResources', pdfSchema)
module.exports = pdfResources
