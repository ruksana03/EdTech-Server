const Partner = require("../../../../models/Partners");

const findAllPartner = async (req, res) => {
    try {
        // Retrieve all partner applications from the database
        const partnerApplications = await Partner.find();
    
        // Respond with the fetched partner applications
        return res.status(200).json(partnerApplications);
      } catch (error) {
        // Handle errors
        console.error('Error fetching partner applications:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports = findAllPartner;