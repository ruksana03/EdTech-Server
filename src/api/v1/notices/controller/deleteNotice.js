const { default: mongoose } = require("mongoose");
const Notice = require("../../../../models/Notices");

const deleteNotice = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate if id is a valid ObjectId before creating the query
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID");
    }

    const query = { _id: id };
    const result = await Notice.deleteOne(query);

    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = deleteNotice;