const { Schema, default: mongoose } = require("mongoose");

const feedbackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    feedbackMessage: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
},{versionKey: false})

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;