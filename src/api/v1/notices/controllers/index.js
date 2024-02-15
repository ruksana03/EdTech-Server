const createNotice = require('./createNotice')
const findAllNotices = require('./findAllNotices')
const findOneNotice = require('./findOneNotice')
const findNoticeUser = require('./findNoticeUser')
const updateNotice = require('./updateNotice')
const deleteNotice = require('./deleteNotice')
const teacherNotices = require('./teacherNotices')
const findNoticeTeacher = require('./findNoticeTeacher')


module.exports = {
    createNotice,findAllNotices,findOneNotice,findNoticeUser,updateNotice,deleteNotice,teacherNotices,findNoticeTeacher,
}