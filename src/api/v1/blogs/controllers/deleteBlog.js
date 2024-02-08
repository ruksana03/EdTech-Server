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

// const Blog = require("../../../../models/Blogs");

// const deleteBlog = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const query = { _id: id };
//         const result = await Blog.deleteOne(query);
//         res.send(result);
//     } catch (error) {
//        console.log(error);
//     }

// }

// module.exports = deleteBlog;


// const Blog = require("../../../../models/Blogs");
// const { ObjectId } = require('mongoose').Types;

// const deleteBlog = async (req, res) => {
//     try {
//         const id = req.params.id;
        
//         // Validate if the provided ID is a valid MongoDB ObjectId
//         const isValidObjectId = ObjectId.isValid(id);
//         if (!isValidObjectId) {
//             return res.status(400).json({ error: 'Invalid blog ID.' });
//         }

//         // Attempt to delete the blog
//         const query = { _id: id };
//         const result = await Blog.deleteOne(query);

//         // Check if the blog was found and deleted
//         if (result.deletedCount === 0) {
//             return res.status(404).json({ error: 'Blog not found.' });
//         }

//         // Send a success response
//         res.status(200).json({ message: 'Blog successfully deleted.' });
//     } catch (error) {
//         // Handle any errors that occur during the deletion process
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while deleting the blog.' });
//     }
// }

// module.exports = deleteBlog;
