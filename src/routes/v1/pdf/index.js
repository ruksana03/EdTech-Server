var express = require("express");
const { createPdfPost, getPdf, deletePdf } = require("../../../api/v1/pdf/controllers");
var router = express.Router()

router.post('/pdf-upload', createPdfPost )
router.get('/get-pdf', getPdf )
router.delete('/delete-pdf/:id',deletePdf)


module.exports = router;