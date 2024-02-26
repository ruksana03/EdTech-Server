const Member = require("../../../../models/member");

const getOneMember = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Member.findById(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getOneMember;