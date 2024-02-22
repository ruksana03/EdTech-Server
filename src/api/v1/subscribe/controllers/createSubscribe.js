const Subscriber = require("../../../../models/Subscribers");

 

const createSubscribe = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Create a new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = createSubscribe;