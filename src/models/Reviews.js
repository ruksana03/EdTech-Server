const { Schema,model} = require("mongoose");


const ReviewSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    details: {
        type: String,
        required:true
    },
    rating: {
        type: Number,
        required:true
    },
}, { versionKey: false })

const Review =  model('Review', ReviewSchema)
module.exports = Review;