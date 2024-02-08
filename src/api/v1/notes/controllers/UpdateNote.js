const Note = require("../../../../models/Notes");

const UpdateNote = async (req, res) => {
    try {
        const id = req.query.id;
        const filter = { _id: id };
        const data = req.body;
        const updatedDoc = {
            $set: {
                title: data.title,
                description: data.description,
                priority: data.priority,
                deadline: data.deadline,
                email: data.email,
            },
        };

        // Update the note with the provided ID
        const result = await Note.updateOne(filter, updatedDoc);

        // Check if the note was found and updated
        if (result.nModified === 0) {
            return res.status(404).json({ error: 'Note not found or not modified.' });
        }

        // Send a success response
        res.json({ message: 'Note updated successfully.' });
    } catch (error) {
        console.error("Error occurred while updating note:", error);
        res.status(500).json({ error: "An error occurred while updating note." });
    }
};

module.exports = UpdateNote;




// app.put('/update', async (req, res) => {
//     const id = req.query.id;
//     const filter = { _id: new ObjectId(id) };
//     const data = req.body;
//     const updatedDoc = {
//       $set: {
//         title: data.title,
//         description: data.description,
//         priority: data.priority,
//         deadline: data.deadline,
//         email: data.email,
//       },
//     };
//     const result = await taskcollection.updateOne(filter, updatedDoc);
//     res.send(result);
//   });