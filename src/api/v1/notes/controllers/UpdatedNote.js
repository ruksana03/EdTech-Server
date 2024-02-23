
const Note = require("../../../../models/Notes");
const mongoose = require('mongoose');

const UpdatedNote = async (req, res) => {
  const id = req.params.id;
  console.log(id)

  try {
    const updatedData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID");
    }

    const filter = { _id: id };
    const options = { upsert: true };

    const result = await Note.updateOne(filter, { $set: updatedData }, options);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = UpdatedNote;

