const Advertisement = require("../../../../models/advertisement");


const getAdvertisement = async (req, res) => {
    try {
        // Retrieve all adverites from the database
        const getAdvert = await Advertisement.find();
    
        // Respond with the fetched offer
        return res.status(200).json(getAdvert);
      } catch (error) {
        // Handle errors
        console.error('Error fetching adverites data:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports =  getAdvertisement;