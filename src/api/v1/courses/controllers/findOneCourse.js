const Course = require("../../../../models/Courses");

const findOneCourse = async (req, res,next) => {
  try {
    const id = req.params.id;
    const result = await Course.findById(id);
    res.send(result);
  } catch (error) {
   next(error);
  }
};

module.exports = findOneCourse