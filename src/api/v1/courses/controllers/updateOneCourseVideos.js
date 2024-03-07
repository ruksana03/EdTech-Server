const CourseVideo = require("../../../../models/courseVideo");
const mongoose = require('mongoose');

const updateOneCourseVideos = async (req, res) => {
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
    const updatedCourseVideo= await CourseVideo.findOneAndUpdate(filter, updatedData, options);

    if (!updatedCourseVideo) {
      return res.status(404).send("Course not found");
    }

    res.send(updatedCourseVideo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateOneCourseVideos;
