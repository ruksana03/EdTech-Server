var express = require('express');
const { createBooking, findAllBooking, deleteBooking, findBooking } = require('../../../api/v1/bookings/controllers');
 
var router = express.Router()

router.post("/bookings", createBooking);
router.get("/bookings", findAllBooking );
router.get("/bookings-all", findBooking );
router.delete("/bookings/delete/:id", deleteBooking );



module.exports = router;