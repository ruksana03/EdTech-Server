const Course = require("../../../../models/Courses");

const createCourse = async (req, res) => {
  const courseDetails = req.body;

  try {
    const newCourse = new Course({
      ...courseDetails,
      status: "pending",
    });

    // Save the new course to the database
    const result = await newCourse.save();

    res.send(result);
  } catch (error) {
    console.error("Error creating course:", error);
  }
};

module.exports = createCourse;
