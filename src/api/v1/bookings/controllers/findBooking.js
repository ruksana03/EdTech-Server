const Booking = require("../../../../models/Bookings");

const findBooking = async (req, res) => {
    try {
      const result = await Booking.find().exec();
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

module.exports = findBooking;
