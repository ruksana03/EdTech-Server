const Feedback = require("../../../../models/feedback");

const deleteFeedback = async (req, res) => {
    const feedbackId = req.params.id;
    try {
        const result = await Feedback.deleteOne({ _id: feedbackId });
        res.send(result);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteFeedback;