var express = require("express");
const { findAllCourse, findPopularCourses, findOneCourse } = require("../../../api/v1/courses/controllers");
var router = express.Router()
 
router.get('/popular', findPopularCourses)
router.get('/courses', findAllCourse)
router.get("/courses/:id",findOneCourse);

module.exports = router;