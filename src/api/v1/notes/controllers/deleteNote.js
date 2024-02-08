const Note = require("../../../../models/Notes");

const deleteNote = async (req, res) => {
    try {
        const id = req.query.id;
        console.log(id);

        // Find the note by ID and delete it
        const result = await Note.deleteOne({ _id: id });

        // Check if the note was found and deleted successfully
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Note not found.' });
        }

        // Send a success response
        res.json({ message: 'Note deleted successfully.' });
    } catch (error) {
        console.error("Error occurred while deleting note:", error);
        res.status(500).json({ error: "An error occurred while deleting note." });
    }
};

module.exports = deleteNote;


// app.delete('/delete', async (req, res) => {
//     const id = req.query.id;
//     console.log(id);
//     const query = { _id: new ObjectId(id) };
//     const result = await taskcollection.deleteOne(query);
//     res.send(result);
//   });