var express = require("express");
const { createRutine, getRutine } = require("../../../api/v1/rutine");
var router = express.Router()

router.post("/create-rutine", createRutine )
router.get("/rutines", getRutine )


module.exports = router;