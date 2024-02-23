var express = require("express");
const { createRutine, getRutine, rutineDelete, getStRutine } = require("../../../api/v1/rutine");
var router = express.Router()

router.post("/create-rutine", createRutine )
router.get("/rutines", getRutine )
router.delete("/rutine-delete/:id", rutineDelete )
router.get("/rutines-for", getStRutine )


module.exports = router;