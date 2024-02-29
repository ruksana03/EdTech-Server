var express = require("express");
const { postCover, getCover,  updateCover, getOneCover } = require("../../../api/v1/CoverPhoto/controllers");
var router = express.Router();


router.post("/cover", postCover);
router.get('/All-photo', getCover);
router.patch('/api/cover/:id',updateCover);

module.exports = router;