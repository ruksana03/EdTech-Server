const Note = require("../../../../models/Notes");

const findAllNote = async (req, res) => {
    try {
        const result = await Note.find();
        res.send(result);
    } catch (error) {
        console.error("Error occurred while fetching all notes:", error);
        res.status(500).json({ error: "An error occurred while fetching all notes." });
    }
};

module.exports = findAllNote;


// app.get('/addtask', async (req, res) => {
//     const result = await taskcollection.find().toArray();
//     res.send(result);
//   });
