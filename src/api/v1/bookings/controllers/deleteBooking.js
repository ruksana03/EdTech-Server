const Booking = require("../../../../models/Bookings");


const deleteBooking =  async (req, res) => {
    const paymentId = req.params.id;

    try {
        const result = await Booking.deleteOne({ _id: paymentId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteBooking;