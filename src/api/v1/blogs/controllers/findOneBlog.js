const Blog = require("../../../../models/Blogs");

const findOneBlog = async (req, res,next) => {
  try {
    const id = req.params.id;
    const result = await Blog.findById(id);
    res.send(result);
  } catch (error) {
   next(error);
  }
};

module.exports = findOneBlog

