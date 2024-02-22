 const Subscriber = require("../../../../models/Subscribers");


const deleteSubscriber =  async (req, res) => {
    const subscribeId = req.params.id;

    try {
        const result = await Subscriber.deleteOne({ _id: subscribeId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting subscriber:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteSubscriber;