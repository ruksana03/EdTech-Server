var express = require("express");
const createPayment = require("../../../api/v1/payments/controllers/createPayment");
var router = express.Router()

router.post("/create-payment-intent", createPayment );
  
module.exports = router;