const express = require("express");
const { createSubscribe, findAllSubscriber, sendMessage } = require("../../../api/v1/subscribe/controllers");
 
const router = express.Router();

router.post("/subscribe", createSubscribe);
router.get('/subscribers',findAllSubscriber );
router.post('/send-message-to-subscribers',sendMessage );


module.exports = router;
