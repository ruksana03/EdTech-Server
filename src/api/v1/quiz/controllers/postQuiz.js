const Quiz = require("../../../../models/Quiz");

const postQuiz = async (req, res, next) => {
    try {
        const quiz = req.body;
        const newQuiz = new Quiz(quiz); 
        const result = await newQuiz.save(); 
        res.send({status: "ok",result}); 
    } catch (error) {
        next(error);
    }
};

module.exports = postQuiz;