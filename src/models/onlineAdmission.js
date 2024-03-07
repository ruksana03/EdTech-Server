const { model, Schema } = require("mongoose");

const onlineAdmissionSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    userRole: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    instituteName: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true
      },
    message: {
        type: String,
        required: true,
    },
    profile_photo: {
        type: String,
        required: true,
    },
}, { versionKey: false })

const onlineAdmission = model('onlineAdmission', onlineAdmissionSchema);
module.exports = onlineAdmission;