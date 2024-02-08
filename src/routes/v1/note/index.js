var express = require("express");

const Note = require("../../../models/Notes");
const { findAllNote, createNote, changeNoteStatus, deleteNote, UpdateNote, postNote } = require("../../../api/v1/notes/controllers");
var router = express.Router();

router.get("/addtask'", findAllNote);
router.get("/addtask", createNote);
router.get("/status", changeNoteStatus );
router.get("/delete", deleteNote);
router.post("/update", UpdateNote);
router.put("/task", postNote);
 

module.exports = router;