var express = require("express");


const {
    createNotice,
    findAllNotices,
    findOneNotice,
    findNoticeUser,
    findNoticeTeacher,
    updateNotice,
    teacherNotices,
    deleteNotice,
  } = require("../../../api/v1/notices/controllers");
var router = express.Router()

 
router.post('/notices', createNotice )
router.get("/notices", findAllNotices)
router.get('/notice/:id', findOneNotice)
router.get("/notices-query", findNoticeTeacher);
router.get('/notice-user', findNoticeUser)
router.put('/notice-updated/:id', updateNotice);
router.get('/teacher-notices', teacherNotices);
router.delete('/notice/:id',deleteNotice );


module.exports = router;