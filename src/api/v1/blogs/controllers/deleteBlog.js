const Blog = require("../../../../models/Blogs");

const deleteBlog =  async (req, res) => {
    const blogId = req.params.id;

    try {
        const result = await Blog.deleteOne({ _id: blogId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteBlog;


