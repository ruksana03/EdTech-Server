const Blog = require("../../../../models/Blogs");

const postBlog = async (req, res) => {
    try {
        const blog = req.body;
        const newBlog = new Blog(blog); 
        const result = await newBlog.save(); 
        res.send(result); 
    } catch (error) {
        console.log("Error posting blog:", error);
        res.status(500).send("Error posting blog"); 
    }
};

module.exports = postBlog;