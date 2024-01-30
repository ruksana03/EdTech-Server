const Booking = require("../../../../models/Bookings");

const createBooking = async (req, res,next) => {
   try {
    const bookingData = req.body;
    const result = await  new Booking (bookingData).save()
    res.send(result);
   } catch (error) {
    next(error)
   }
}

module.exports = createBooking;