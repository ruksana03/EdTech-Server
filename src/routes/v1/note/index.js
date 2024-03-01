const express = require("express");
const router = express.Router();

const { findAllNote, createNote, changeNoteStatus, deleteNote, postNote } = require("../../../api/v1/notes/controllers");
const UpdateNote = require("../../../api/v1/notes/controllers/UpdatedNote");
const findOneNote = require("../../../api/v1/notes/controllers/findOneNote");

router.get("/addtask", findAllNote);
router.post("/task", createNote);
router.delete("/delete/:id", deleteNote);
router.put("/update/:id", UpdateNote);
router.get("/note/:id", findOneNote);
router.patch('/status', changeNoteStatus);

module.exports = router;
