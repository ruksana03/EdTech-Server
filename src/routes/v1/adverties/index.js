var express = require('express');
var router = express.Router()
const { createAdvertisement, getAdvertisement, deleteAdvertisement } = require("../../../api/v1/advertisement");


router.post('/post-advertise', createAdvertisement);
router.get('/get-advertise', getAdvertisement);
router.delete('/delete-advertise/:id', deleteAdvertisement);

module.exports=router