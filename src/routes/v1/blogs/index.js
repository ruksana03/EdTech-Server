var express = require("express");
const findAllBlogs = require("../../../api/v1/blogs/controllers/findAllBlogs");
const  postBlog  = require("../../../api/v1/blogs/controllers/postBlog");
const findOneBlog = require("../../../api/v1/blogs/controllers/findOneBlog")
const deleteBlog = require("../../../api/v1/blogs/controllers/deleteBlog");
const { updateBlog } = require("../../../api/v1/blogs/controllers");
var router = express.Router()

router.get('/blogs', findAllBlogs )
router.post('/blogs', postBlog )
router.get('/blog/:id',findOneBlog)
router.delete('/blog/delete/:id', deleteBlog)
router.put('/blog/updated/:id',updateBlog)

module.exports = router