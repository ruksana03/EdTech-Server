var express = require("express");
const findAllVideos = require("../../../api/v1/recordedVideos/controller/findAllVideos");
var router = express.Router()

router.get('/recorded', findAllVideos )

module.exports = router;