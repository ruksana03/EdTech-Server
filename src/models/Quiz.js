const { Schema, model } = require("mongoose");

const QuizSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    correct_answer: {
        type: String,
        required: true,
    },
},{ versionKey: false });

const Quiz = model("Quiz", QuizSchema);

module.exports = Quiz;
