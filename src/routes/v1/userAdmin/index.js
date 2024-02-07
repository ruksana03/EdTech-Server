var express = require("express");
const verifyAdmin = require("../../../middlewares/verifyAdmin");
const { findUserAdmin } = require("../../../api/v1/users/controllers.js");
const verifyToken = require("../../../middlewares/verifyToken.js");
var router = express.Router()

router.get('/users/admin/:email', findUserAdmin );
module.exports = router;