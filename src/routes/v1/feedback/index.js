var express = require("express");
var router = express.Router()
const { createFeedback, getFeedbacks, updateRating, deleteFeedback,  } = require("../../../api/v1/feedback/controllers");


router.post("/create-feedback", createFeedback);
router.get("/feedbacks-data", getFeedbacks)
router.put("/updated-feedback/:id", updateRating)
router.delete("/deleted-feedback/:id", deleteFeedback)


module.exports = router;

