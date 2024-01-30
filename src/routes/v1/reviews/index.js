var express = require("express");
const findAllReview = require("../../../api/v1/reviews/controllers/findAllReview");
 
var router = express.Router()

router.get("/reviews", findAllReview )


module.exports = router;