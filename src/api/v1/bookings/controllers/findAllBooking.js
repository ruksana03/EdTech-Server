const Booking = require("../../../../models/Bookings");

const findAllBooking = async (req, res) => {
  try {
    const stEmail = req.query.stEmail;
     

    const result = await Booking.find({ stEmail: stEmail }).exec();

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = findAllBooking;