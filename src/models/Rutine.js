const { Schema, model, default: mongoose } = require("mongoose");
const rutineSchema = new Schema({
    start: Date,
    end: Date,
    title: {
        type: String,
        required:true
    }

}, { versionKey: false })
const Rutine =  mongoose.model('Rutines', rutineSchema);
module.exports = Rutine;