const Application = require("../../../../models/application");


const rejectedApplication = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const result = await Application.deleteOne(query);
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = rejectedApplication;