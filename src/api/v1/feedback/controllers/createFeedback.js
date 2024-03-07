const Feedback = require("../../../../models/feedback");

const createFeedback = async (req, res) => {
    try {
        const feedbackData = req.body;
        const result = await new Feedback(feedbackData).save();
        res.send(result);
    }
    catch (error) {
        console.log(error.message);
    }
};

module.exports = createFeedback;