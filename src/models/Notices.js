const { Schema, model } = require("mongoose");


const NoticeSchema = new Schema({
    image: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    sentNotices: {
        type: String, 
    },
    sentForCourse: {
        type: String,
    },
    hostEmail: {
        type: String,
        required:true
    },
    hostName: {
        type: String,
        required:true
    },
}, { versionKey: false })

const Notice = model('Notice', NoticeSchema)
module.exports = Notice;