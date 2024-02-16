var express = require("express");
const { createApplication, findAllApplication, findOneApplication, updatedStatusApplication, rejectedApplication } = require("../../../api/v1/application");
var router = express.Router()

router.post('/applications', createApplication );
router.get('/applications', findAllApplication );
router.get('/application/:id', findOneApplication );
router.put('/application/approve/:id', updatedStatusApplication );
router.delete('/application/reject/:id', rejectedApplication );




module.exports = router;