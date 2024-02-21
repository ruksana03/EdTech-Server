const Quiz = require("../../../../models/Quiz");

const getQuiz = async (req, res,next) => {
    try {
      const result = await Quiz.find();
      res.send(result)
    } catch (error) {
     next(error);
    }
}

module.exports = getQuiz;