const Note = require("../../../../models/Notes");

const postNote = async(req,res,next) => {
    try{
      const noteData = req.body;
      const result = await new Note(noteData).save()
      res.send(result);
    }
    catch(error){
      next(error);
    }
}

module.exports = postNote;

// app.post('/task', async (req, res) => {
//     const data = req.body;
//     const result = await taskcollection.insertOne(data);
//     res.send(result);
//   });