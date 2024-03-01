const Offer = require("../../../models/offer");


const deleteOffer = async (req, res) => {
    const offerId = req.params.id;

    try {
        const result = await Offer.deleteOne({ _id: offerId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteOffer;