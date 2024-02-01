var express = require("express");
const verifyAdmin = require("../../../middlewares/verifyAdmin");
const { findUserAdmin } = require("../../../api/v1/users/controllers.js");
var router = express.Router()

router.get('/users/admin/:email',verifyAdmin, findUserAdmin );
module.exports = router;