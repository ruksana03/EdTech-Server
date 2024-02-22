const express = require("express");
const createPartner = require("../../../api/v1/partners/controllers/createPartner");
const router = express.Router();


router.post('/partner-applications', createPartner)

module.exports = router;