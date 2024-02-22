const Note = require("../../../../models/Notes");

const changeNoteStatus = async (req, res) => {
    try {
        const id = req.query.id;
        const { status } = req.body; // Destructure status from req.body

        // Find the note by ID and update its status
        const updatedNote = await Note.findByIdAndUpdate(id, { status }, { new: true });

        // Check if the note was found and updated successfully
        if (!updatedNote) {
            return res.status(404).json({ error: 'Note not found.' });
        }

        // Send the updated note in the response
        res.json(updatedNote);
    } catch (error) {
        console.error("Error occurred while changing note status:", error);
        res.status(500).json({ error: "An error occurred while changing note status." });
    }
};

module.exports = changeNoteStatus;
