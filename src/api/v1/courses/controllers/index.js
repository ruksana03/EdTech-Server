const findAllCourse = require('./findAllCourse')
const findPopularCourses = require('./findPopularCourses')
const findOneCourse = require('./findOneCourse')
const createCourse = require('./createCourse')
const updateCourseStatus = require('./updateCourseStatus')
const findApprovedCourses = require('./findApprovedCourses')
const deleteCourse = require('./deleteCourse')
const updateCourse = require('./updateCourse')

// course content 

const addCourseVideo = require('./addCourseVideo')
const getCourseAllVideo = require('./getCourseAllVideo')
const getOneCourseAllVideo = require('./getOneCourseAllVideo')
const updateOneCourseVideos = require('./updateOneCourseVideos')
const deleteCourseAllVideo = require('./deleteCourseAllVideo')

module.exports = {
    findAllCourse,
    findPopularCourses,
    findOneCourse,
    createCourse,
    updateCourseStatus,
    findApprovedCourses,
    deleteCourse,
    updateCourse,

    // course content 

    addCourseVideo,
    getCourseAllVideo,
    getOneCourseAllVideo,
    updateOneCourseVideos,
    deleteCourseAllVideo,
}