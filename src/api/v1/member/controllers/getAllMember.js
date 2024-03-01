const Member = require("../../../../models/member");

const getAllMember = async (req, res,next) => {
    try {
      const result = await Member.find() 
      res.send(result)
    } catch (error) {
     next(error);
    }
}

module.exports = getAllMember;