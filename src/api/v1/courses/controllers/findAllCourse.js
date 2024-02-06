const Course = require("../../../../models/Courses");

 
const findAllCourse =  async (req, res,next) => {
  try {
    const result = await Course.find() 
    res.send(result)
  } catch (error) {
     next(error)
  }
}

module.exports = findAllCourse;