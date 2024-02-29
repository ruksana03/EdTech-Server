var express = require("express");
const { createNoticeByTeacher, createNoticeByAdmin, findAllTeacherNotice, findAllAdminNotice, deleteTeacherNotice, deleteAdminNotice, updateAdminPostedNotice, updateTeacherNotice, findOneAdminNotice, findOneTeacherNotice } = require("../../../api/v1/notices/controller");
var router = express.Router()

 
router.post('/teacher-notices', createNoticeByTeacher )
router.post('/admin-notices', createNoticeByAdmin )
router.get("/all-teacher-notices", findAllTeacherNotice)
router.get("/all-admin-notices", findAllAdminNotice)
router.delete('/teacher-notices/:id',deleteTeacherNotice );
router.delete('/admin-notices/:id',deleteAdminNotice );
router.put('/admin-notice-updated/:id', updateAdminPostedNotice);
router.put('/teacher-notice-updated/:id', updateTeacherNotice);
router.get('/admin-notice/:id', findOneAdminNotice);
router.get('/teacher-notice/:id', findOneTeacherNotice);

module.exports = router;