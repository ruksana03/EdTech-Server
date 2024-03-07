var express = require("express");
const { createAdmission, findAllOnlineAdmission, findOneAdmission, updatedStatusAdmission, rejectedOnlineAdmission } = require("../../../api/v1/online-admission");
var router = express.Router()

router.post('/online-admission', createAdmission );
router.get('/all-admissions', findAllOnlineAdmission );
router.get('/online-admission/:id', findOneAdmission );
router.put('/online-admission/approve/:id', updatedStatusAdmission );
router.delete('/online-admission/reject/:id', rejectedOnlineAdmission );




module.exports = router;