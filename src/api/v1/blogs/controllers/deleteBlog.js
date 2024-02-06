const Blog = require("../../../../models/Blogs");

const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("From blog",id);
        const query = { _id: new ObjectId(id) };
        const result = await Blog.deleteOne(query);
        res.send(result);
    } catch (error) {
       console.log(error);
    }

}

module.exports = deleteBlog;