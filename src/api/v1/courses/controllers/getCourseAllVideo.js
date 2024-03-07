const CourseVideo = require("../../../../models/courseVideo");

const getCourseAllVideo =  async (req, res,next) => {
  try {
    const result = await CourseVideo.find() 
    res.send(result)
  } catch (error) {
     next(error)
  }
}

module.exports = getCourseAllVideo;