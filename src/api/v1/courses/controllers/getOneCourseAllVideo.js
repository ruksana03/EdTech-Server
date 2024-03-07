const CourseVideo = require("../../../../models/courseVideo");

const getOneCourseAllVideo = async (req, res,next) => {
  try {
    const id = req.params.id;
    const result = await CourseVideo.findById(id);
    res.send(result);
  } catch (error) {
   next(error);
  }
};

module.exports = getOneCourseAllVideo