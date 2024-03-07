const Feedback = require("../../../../models/feedback");


const getFeedbacks = async (req, res) => {
    try {
        const result = await Feedback.find();
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}
module.exports = getFeedbacks