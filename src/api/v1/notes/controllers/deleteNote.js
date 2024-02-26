const Note = require("../../../../models/Notes");

const deleteNote =  async (req, res) => {
    const noteId = req.params.id;

    try {
        const result = await Note.deleteOne({ _id: noteId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteNote;
