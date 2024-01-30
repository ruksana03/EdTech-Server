var express = require ("express");
const createCookieToken = require("../../../api/v1/authentication/controllers/createCookieToken");
var router = express.Router()

router.post('/jwt', createCookieToken);

module.exports = router;