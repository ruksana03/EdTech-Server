// updateBlog.js

const Blog = require("../../../../models/Blogs");
const mongoose = require('mongoose');

const updateBlog = async (req, res) => {
  const id = req.params.id;
  console.log(id)

  try {
    const updatedData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID");
    }

    const filter = { _id: id };
    const options = { upsert: true };

    const result = await Blog.updateOne(filter, { $set: updatedData }, options);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateBlog;
