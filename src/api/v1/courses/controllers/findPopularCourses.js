const Course = require("../../../../models/Courses");

const findPopularCourses =  async (req, res) => {
    const result = await Course.find({category:"popular"}) 
    res.send(result)
}
  
module.exports = findPopularCourses;