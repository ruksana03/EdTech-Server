const Course = require("../../../../models/Courses");
const mongoose = require('mongoose');

const updateCourse = async (req, res) => {
  const id = req.params.id;

  try {
    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID");
    }

    const updatedData = req.body;

    // Perform update operation
    const filter = { _id: id };
    const options = { new: true }; // Return the updated document
    const updatedCourse= await Course.findOneAndUpdate(filter, updatedData, options);

    if (!updatedCourse) {
      return res.status(404).send("Course not found");
    }

    res.send(updatedCourse);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateCourse;
