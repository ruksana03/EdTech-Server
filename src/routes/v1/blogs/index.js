var express = require("express");
const findAllBlogs = require("../../../api/v1/blogs/controllers/findAllBlogs");
const  postBlog  = require("../../../api/v1/blogs/controllers/postBlog");
var router = express.Router()

router.get('/blogs', findAllBlogs )
router.post('/blogs', postBlog )


module.exports = router