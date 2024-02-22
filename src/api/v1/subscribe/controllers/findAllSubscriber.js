const Subscriber = require("../../../../models/Subscribers");

const findAllSubscriber =async (req, res) => {
    try {
      const subscribers = await Subscriber.find({}, { email: 1 });
      res.json(subscribers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

module.exports = findAllSubscriber;