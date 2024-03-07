var express = require("express");
const {
  findAllCourse,
  findPopularCourses,
  findOneCourse,
  createCourse,
  updateCourseStatus,
  findApprovedCourses,
  deleteCourse,
  updateCourse,
  addCourseVideo,
  getCourseAllVideo,
  getOneCourseAllVideo,
  updateOneCourseVideos,
  deleteCourseAllVideo,

} = require("../../../api/v1/courses/controllers");

var router = express.Router();

router.get("/popular", findPopularCourses);
router.get("/courses/all/requests", findAllCourse);
router.get("/courses", findApprovedCourses );
router.get("/courses/:id", findOneCourse);
router.post("/courses", createCourse);
router.put("/courses/approve/:id", updateCourseStatus);
router.put("/courses/update/:id", updateCourse);
router.delete('/courses/delete/:id', deleteCourse);

// course content 
router.post("/videos",addCourseVideo);
router.get("/videos",getCourseAllVideo);
router.get("/videos/:id",getOneCourseAllVideo);
router.put("/video/update/:id", updateOneCourseVideos);
router.delete('/video/delete/:id', deleteCourseAllVideo);


module.exports = router;
