
const { Schema, model } = require("mongoose");


const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "todo",
        required: true
    }
})

const Notes = model('Notes', noteSchema)
module.exports = Notes;
