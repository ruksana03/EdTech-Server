const express = require("express");
const createSubscribe = require("../../../api/v1/subscribe/controllers/createSubscribe");
const router = express.Router();

router.post("/subscribe", createSubscribe);

module.exports = router;
