
const Notes = require("../../../../models/Notes");

const findOneNote = async (req, res,next) => {
  try {
    const id = req.params.id;
    const result = await Notes.findById(id);
    res.send(result);
  } catch (error) {
   next(error);
  }
};

module.exports = findOneNote