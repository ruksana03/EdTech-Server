const Member = require("../../../../models/member");

const deleteMember =  async (req, res) => {
    const memberId = req.params.id;

    try {
        const result = await Member.deleteOne({ _id: memberId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting member:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteMember;