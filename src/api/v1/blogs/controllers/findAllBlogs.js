const Blog = require("../../../../models/Blogs");

const findAllBlogs = async (req, res,next) => {
    try {
      const result = await  Blog.find() 
      res.send(result)
    } catch (error) {
     next(error);
    }
}

module.exports = findAllBlogs;