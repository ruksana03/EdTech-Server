var express = require("express");
const findAllBlogs = require("../../../api/v1/blogs/controllers/findAllBlogs");
var router = express.Router()

router.get('/blogs', findAllBlogs )


module.exports = router