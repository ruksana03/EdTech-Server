const Offer = require("../../../models/offer");

const getOffer = async (req, res) => {
    try {
        // Retrieve all offer from the database
        const getFindOffer = await Offer.find();
    
        // Respond with the fetched offer
        return res.status(200).json(getFindOffer);
      } catch (error) {
        // Handle errors
        console.error('Error fetching offer data:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports =  getOffer;