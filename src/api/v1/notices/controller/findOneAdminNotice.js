const Notice = require("../../../../models/NoticesA");

const findOneAdminNotice = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Notice.findById(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = findOneAdminNotice;