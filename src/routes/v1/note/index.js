var express = require("express");

const Note = require("../../../models/Notes");
const { findAllNote, createNote, changeNoteStatus, deleteNote, UpdateNote, postNote } = require("../../../api/v1/notes/controllers");
var router = express.Router();

router.get("/addtask", findAllNote);
router.post("/addtask", createNote);
router.patch("/status", changeNoteStatus );
router.delete("/delete", deleteNote);
router.put("/update", UpdateNote);
router.post("/task", postNote);
 

module.exports = router;