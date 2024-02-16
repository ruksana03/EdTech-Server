const { Schema, model } = require('mongoose');

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    contents: {
        type: [{
            id: Number,
            value: String
        }],
        required: true
    },
    imageUrl: {
        type: String
    },
    tags: {
        type: [String],
        required: true
    },
    userPhoto: {
        type: String
    },
    userName: {
        type: String
    },
    userEmail: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Blog = model('Blog', BlogSchema);
module.exports = Blog;

