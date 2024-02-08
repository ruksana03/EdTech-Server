var express = require("express");
const {
  findAllCourse,
  findPopularCourses,
  findOneCourse,
  createCourse,
  updateCourseStatus,
  findApprovedCourses,
  deleteCourse,
} = require("../../../api/v1/courses/controllers");
const Course = require("../../../models/Courses");
var router = express.Router();

router.get("/popular", findPopularCourses);
router.get("/courses/all/requests", findAllCourse);
router.get("/courses", findApprovedCourses );
router.get("/courses/:id", findOneCourse);
router.post("/courses", createCourse);
router.put("/courses/approve/:id", updateCourseStatus);
router.delete('/courses/delete/:id', deleteCourse);
 

module.exports = router;
