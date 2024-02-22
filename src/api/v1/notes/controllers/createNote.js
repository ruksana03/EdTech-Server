
const Notes = require("../../../../models/Notes");

const createNote = async (req, res,next) => {
   try {
    const createData = req.body;
    const result = await  new Notes (createData).save()
    res.send(result);
   } catch (error) {
    next(error)
   }
}

module.exports = createNote;

