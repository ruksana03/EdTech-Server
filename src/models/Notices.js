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
    email: {
        type: String,
        required:true
    },
})

const Notice = model('Notice', NoticeSchema)
module.exports = Notice;