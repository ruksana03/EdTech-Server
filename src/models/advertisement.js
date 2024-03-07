const { Schema, model } = require("mongoose");


const advertiseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },

    imgLink: {
        type: String,
        required: true,
    },

   
}, { versionKey: false })

const Advertisement = model("Advertisement", advertiseSchema);
module.exports = Advertisement;