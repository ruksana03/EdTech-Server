const User = require("../../../../models/Users");


const putUserToChangeRole = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id, role: { $ne: "teacher" } },
      { $set: { role: "teacher" } },
      { new: true } // This option returns the modified document
    );

    if (!updatedUser) {
      return res.status(404).send("User not found or already teacher.");
    }

    res.send(updatedUser);
  } catch (error) {
    console.error("Error updating course status:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = putUserToChangeRole;
