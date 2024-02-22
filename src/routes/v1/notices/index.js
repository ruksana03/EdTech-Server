var express = require("express");
const { createNotice, findAllNotices, findOneNotice, findNoticeUser, updateNotice, teacherNotices, deleteNotice } = require("../../../api/v1/notices/controller");
const findNoticeTeacher = require("../../../api/v1/notices/controller/findNoticeTeacher");
var router = express.Router()

 
router.post('/notices', createNotice )
router.get("/notices", findAllNotices)
router.get('/notice/:id', findOneNotice)
router.get("/notices-query",findNoticeTeacher );
router.get('/notice-user', findNoticeUser)
router.put('/notice-updated/:id', updateNotice);
router.get('/teacher-notices', teacherNotices);
router.delete('/notice/:id',deleteNotice );


module.exports = router;