const { Schema, model } = require("mongoose");

const BookingSchema = new Schema({
  stName: {
    type: String,
    required: true,
  },
  stEmail: {
    type: String,
    required: true,
  },
  stImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
   image: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  classId: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
}, { versionKey: false });

const Booking = model("Booking", BookingSchema);
module.exports = Booking;
