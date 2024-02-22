const Partner = require("../../../../models/Partners");

const createPartner = async (req, res) => {
    try {
        // Destructure fields from request body
        const { fullName, email, phoneNumber, organization, message, profile_photo } = req.body;
    
        // Create a new partner application instance
        const newPartnerApplication = new Partner({
          fullName,
          email,
          phoneNumber,
          organization,
          message,
          profile_photo
        });
    
        // Save the application to the database
        await newPartnerApplication.save();
    
        // Respond with success message
        return res.status(201).json({ message: 'Partner application submitted successfully' });
      } catch (error) {
        // Handle errors
        console.error('Error submitting partner application:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports = createPartner;