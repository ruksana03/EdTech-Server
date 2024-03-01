const Member = require("../../../../models/member");
const mongoose = require('mongoose');

const updatedMemberInfo = async (req, res) => {
  const id = req.params.id;

  try {
    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID");
    }

    const updatedData = req.body;

    // Perform update operation
    const filter = { _id: id };
    const options = { new: true }; // Return the updated document
    const updatedMember = await Member.findOneAndUpdate(filter, updatedData, options);

    if (!updatedMember) {
      return res.status(404).send("Member not found");
    }

    res.send(updatedMember);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = updatedMemberInfo;
