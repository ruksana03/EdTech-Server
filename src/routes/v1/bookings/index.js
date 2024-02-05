var express = require('express');
const { createBooking, findAllBooking } = require('../../../api/v1/bookings/controllers');
 
var router = express.Router()

router.post("/bookings", createBooking);
router.get("/bookings", findAllBooking );
  
module.exports = router;