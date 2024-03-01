const { Schema, model } = require("mongoose");

const offerSchema = new Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },

    offerDescription: {
        type: String,
        required: true,
    },

    offPercentage: {
        type:Number,
        required: true,
    },
    
}, { versionKey: false });

const Offer = model("Offer", offerSchema);
module.exports = Offer;
