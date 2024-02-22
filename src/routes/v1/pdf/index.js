var express = require("express");
const { createPdfPost, getPdf } = require("../../../api/v1/pdf/controllers");
var router = express.Router()

router.post('/pdf-upload', createPdfPost )
router.get('/get-pdf', getPdf )


module.exports = router;