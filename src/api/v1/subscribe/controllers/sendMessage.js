require("dotenv").config();
const nodemailer = require('nodemailer');
const Subscriber = require('../../../../models/Subscribers');


// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.EMAIL_PASSWORD 
  }
});

const sendMessage = async (req, res) => {
    try {
      const { message } = req.body;
      const subscribers = await Subscriber.find({}, { email: 1 });
  
      // Send message to each subscriber
      subscribers.forEach(async (subscriber) => {
        // Send email to subscriber
        await transporter.sendMail({
          from: process.env.EMAIL,  
          to: subscriber.email, // Recipient address
          subject: 'Message from Ace Coders', // Email subject
          text: message  
        });
  
        console.log('Message sent to:', subscriber.email);
      });
  
      res.json({ message: 'Message sent to all subscribers' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

module.exports = sendMessage;
