const express = require("express");
const io = require("socket.io")();
const getMessage = require("../../../api/v1/messages/controllers/getMessage");
const createMessage = require("../../../api/v1/messages/controllers/createMessage");
const router = express.Router();

router.get("/messages", getMessage);
router.post("/messages", (req, res) => {
  createMessage(req, res, io); // Pass io object to createMessage
});

module.exports = router;
