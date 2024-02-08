const Note = require("../../../../models/Notes");

const createNote = async (req, res) => {
    try {
        const noteData = req.body;
        const newNote = new Note({
            title: noteData.title,
            description: noteData.description,
            date: noteData.date,
            priority: noteData.priority,
            status: 'todo'
        });
        const savedNote = await newNote.save();
        res.json(savedNote);
    } catch (error) {
        console.error("Error occurred while creating note:", error);
        res.status(500).json({ error: "An error occurred while creating note." });
    }
};

module.exports = createNote;

// app.post('/addtask', async (req, res) => {
//     const taskadd = req.body;
//     const data = {
//       title: taskadd.title,
//       description: taskadd.description,
//       date: taskadd.date,
//       priority: taskadd.priority,
//       status: 'todo',
//     };
//     const result = await taskcollection.insertOne(data);
//     res.send(result);
//   });