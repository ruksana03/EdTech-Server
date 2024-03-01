
const express = require("express");
const { createOffer, getOffer, deleteOffer } = require("../../../api/v1/offer");

 
const router = express.Router();


router.post('/post-offer', createOffer)
router.get('/get-offers', getOffer )
router.delete('/delete-offer/:id', deleteOffer)

module.exports = router;