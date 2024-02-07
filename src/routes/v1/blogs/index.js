var express = require("express");

const findAllBlogs = require("../../../api/v1/blogs/controllers/findAllBlogs");
const deleteBlog = require("../../../api/v1/blogs/controllers/deleteBlog");

var router = express.Router()

router.get('/blogs', findAllBlogs );
router.delete('/blog/:id', deleteBlog);


module.exports = router