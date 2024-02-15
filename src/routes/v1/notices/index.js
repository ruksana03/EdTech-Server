var express = require("express");
const { findOneNotice, findAllNotices, createNotice, findNoticeUser, updateNotice, deleteNotice } = require("../../../api/v1/notices/controller.js");
const findNoticeTeacher = require("../../../api/v1/notices/controller.js/findNoticeTeacher.js");
var router = express.Router()


router.post('/notices', createNotice )
router.get("/notices", findAllNotices)
router.get('/notice/:id', findOneNotice)
router.get("/notices-query",findNoticeTeacher );
router.get('/notice-user', findNoticeUser)
router.put('/notice-updated/:id', updateNotice);
router.delete('/notice/:id',deleteNotice );


module.exports = router;