const Notice = require("../../../../models/NoticesT");

const findNoticeTeacher = async (req, res) => {
  try {
    const sentNotices = req.query.sentNotices;
    const query = {sentNotices: sentNotices}
    const result = await Notice.find(query) 
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = findNoticeTeacher;
