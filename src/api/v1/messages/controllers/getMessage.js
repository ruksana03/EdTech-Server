const Message = require("../../../../models/Message");

const getMessage =  async (req, res) => {
    try {
      const messages = await Message.find({});
      res.json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }

module.exports = getMessage;