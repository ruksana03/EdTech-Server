const Booking = require("../../../../models/Bookings");

const findAllBooking = async (req, res, next) => {
  try {
  
    const result = await Booking.find();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = findAllBooking;