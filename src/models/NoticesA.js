const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticeSchemaT = new Schema({
    image: {
        type: String, 
        required: true 
    },
    date: {
        type: Date,
        default: Date.now 
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sentNotices: {
        type: String, 
        default: '' 
    },
    hostName: {
        type: String,
        required: true
    },
    hostEmail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('YourModel', NoticeSchemaT);
