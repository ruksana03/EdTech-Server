const Message = require("../../../../models/Message");
const io = require('socket.io')();
const createMessage = async (req, res, io) => {
    try {
      const { text, user } = req.body; // Assuming user data is sent along with the message
      const message = new Message({ text, user });
      await message.save();
  
      // Emit the message to connected clients
      io.emit("message", message);
  
      res.status(201).send(message);
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).send("Internal Server Error");
    }
  };

module.exports = createMessage;