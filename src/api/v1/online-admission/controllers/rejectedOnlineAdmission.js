const onlineAdmission = require("../../../../models/onlineAdmission");


const rejectedOnlineAdmission = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const result = await onlineAdmission.deleteOne(query);
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = rejectedOnlineAdmission;