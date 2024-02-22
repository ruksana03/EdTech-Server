const Course = require("../../../../models/Courses");

const updateCourseStatus = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedCourse = await Course.findOneAndUpdate(
      { _id: id, status: { $ne: "approved" } },
      { $set: { status: "approved" } },
      { new: true } // This option returns the modified document
    );

    if (!updatedCourse) {
      return res.status(404).send("Course not found or already approved.");
    }

    res.send(updatedCourse);
  } catch (error) {
    console.error("Error updating course status:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updateCourseStatus;
