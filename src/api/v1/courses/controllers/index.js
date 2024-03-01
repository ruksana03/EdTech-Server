const findAllCourse = require('./findAllCourse')
const findPopularCourses = require('./findPopularCourses')
const findOneCourse = require('./findOneCourse')
const createCourse = require('./createCourse')
const updateCourseStatus = require('./updateCourseStatus')
const findApprovedCourses = require('./findApprovedCourses')
const deleteCourse = require('./deleteCourse')

module.exports = {
    findAllCourse,
    findPopularCourses,
    findOneCourse,
    createCourse,
    updateCourseStatus,
    findApprovedCourses,
    deleteCourse,
}