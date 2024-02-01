var express = require("express");
const { findOneNotice, findAllNotices, createNotice, findNoticeQuery, findNoticeUser, updateNotice, deleteNotice } = require("../../../api/v1/notices/controller.js");
var router = express.Router()


router.post('/notices', createNotice )
router.get("/notices", findAllNotices)
router.get('/notice/:id', findOneNotice)
router.get("/notices-query", findNoticeQuery);
router.get('/notice-user', findNoticeUser)
router.put('/notice-updated/:id', updateNotice);
router.delete('/notice/:id',deleteNotice );


module.exports = router;