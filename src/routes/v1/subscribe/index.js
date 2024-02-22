const express = require("express");
const { createSubscribe, findAllSubscriber } = require("../../../api/v1/subscribe/controllers");
 
const router = express.Router();

router.post("/subscribe", createSubscribe);
router.get('/subscribers',findAllSubscriber );

module.exports = router;
