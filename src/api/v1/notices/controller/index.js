const createNoticeByTeacher = require('./createNoticeByTeacher')
const createNoticeByAdmin = require('./createNoticeByAdmin')
const findAllTeacherNotice = require('./findAllTeacherNotice')
const findAllAdminNotice = require('./findAllAdminNotice')
const deleteAdminNotice = require('./deleteAdminNotice')
const deleteTeacherNotice = require('./deleteTeacherNotice')
const updateAdminPostedNotice = require('./updateAdminPostedNotice')
const updateTeacherNotice = require('./updateTeacherNotice')
const findOneAdminNotice = require('./findOneAdminNotice')
const findOneTeacherNotice = require('./findOneTeacherNotice')


module.exports = {
    createNoticeByTeacher,
    createNoticeByAdmin,
    findAllTeacherNotice,
    findAllAdminNotice,
    deleteTeacherNotice,
    deleteAdminNotice,
    updateAdminPostedNotice,
    updateTeacherNotice,
    findOneAdminNotice,
    findOneTeacherNotice,
}