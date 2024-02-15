const createNotice = require('./createNotice')
const findAllNotices = require('./findAllNotices')
const findOneNotice = require('./findOneNotice')
const findNoticeQuery = require('./findNoticeTeacher')
const findNoticeUser = require('./findNoticeUser')
const updateNotice = require('./updateNotice')
const deleteNotice = require('./deleteNotice')


module.exports = {
    createNotice,findAllNotices,findOneNotice,findNoticeQuery,findNoticeUser,updateNotice,deleteNotice
}