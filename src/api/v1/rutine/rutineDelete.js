const { default: mongoose } = require("mongoose");
const Rutine = require("../../../models/Rutine");

const rutineDelete = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID");
    }
    const query = { _id: id };
    const result = await Rutine.deleteOne(query);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = rutineDelete;