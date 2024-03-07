const Advertisement = require("../../../../models/advertisement");


const deleteAdvertisement = async (req, res) => {
    const adId = req.params.id;

    try {
        const result = await Advertisement.deleteOne({ _id: adId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting Advertisement:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteAdvertisement;
