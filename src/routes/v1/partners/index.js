const express = require("express");
const { createPartner, findAllPartner } = require("../../../api/v1/partners/controllers");
 
const router = express.Router();


router.post('/partner-applications', createPartner)
router.get('/partner-applications', findAllPartner )

module.exports = router;