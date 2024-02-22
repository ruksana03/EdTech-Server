var express = require("express");
const { createRutine, getRutine, rutineDelete } = require("../../../api/v1/rutine");
var router = express.Router()

router.post("/create-rutine", createRutine )
router.get("/rutines", getRutine )
router.delete("/rutine-delete", rutineDelete )


module.exports = router;