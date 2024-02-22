const Notes = require("../../../../models/Notes");

const postNote = async(req,res,next) => {
    try{
      const noteData = req.body;
      const result = await new Notes(noteData).save()
      res.send(result);
    }
    catch(error){
      next(error);
    }
}

module.exports = postNote;
