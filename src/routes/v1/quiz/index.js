var express = require("express");
const postQuiz = require("../../../api/v1/quiz/controllers/postQuiz");
const getQuiz = require("../../../api/v1/quiz/controllers/getQuiz");

var router = express.Router();

router.post("/quiz",postQuiz );
router.get("/quiz", getQuiz);

module.exports = router;