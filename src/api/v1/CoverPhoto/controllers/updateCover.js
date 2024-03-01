const Cover = require("../../../../models/cover");
const mongoose = require('mongoose');

const updateCover = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body; // Assuming updatedData contains 'image' field

  try {
    // Validate incoming data
    if (!updatedData.image) {
      return res.status(400).send("Image URL is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID");
    }

    const filter = { _id: id };
    const update = { image: updatedData.image }; // Assuming updatedData contains 'image' field

    // Use findOneAndUpdate to update cover photo by ID
    const result = await Cover.findOneAndUpdate(filter, update, { new: true });

    if (!result) {
      return res.status(404).send("Cover photo not found");
    }

    // If you need to return the updated cover photo data, you can do so
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = updateCover;
