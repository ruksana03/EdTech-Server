const Feedback = require("../../../../models/feedback");


const updateRating = async (req, res) => {
    try {
        const updatedData = req.body;
        const id = req.params.id;
        const filter = { _id: id };
        const options = { upsert: true };
        const result = await Feedback.updateOne(filter, { $set: updatedData }, options);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = updateRating;