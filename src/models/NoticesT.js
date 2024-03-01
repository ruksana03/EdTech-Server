const { Schema, model } = require("mongoose");


const NoticeSchemaT = new Schema({
    image: { type: String }, 
    date: { type: Date, default: Date.now },
    title: { type: String, required: true }, 
    description: { type: String, required: true }, 
    sentForCourse: { type: String, required: true }, 
    hostName: { type: String }, 
    hostEmail: { type: String },
}, { versionKey: false })

const Notice = model('Notice', NoticeSchemaT)
module.exports = Notice;