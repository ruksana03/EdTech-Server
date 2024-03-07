const Member = require("../../../../models/member");

const createNewMember = async (req, res) => {
    try {
        const member = req.body;
        const newMember = new Member(member); 
        const result = await newMember.save(); 
        res.send(result); 
    } catch (error) {
        console.log("Error posting member:", error);
        res.status(500).send("Error posting member"); 
    }
};

module.exports = createNewMember;