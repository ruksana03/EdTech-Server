const Notice = require("../../../../models/Notices");


const teacherNotices = async (req, res) => {
  try {
    const email = req.query.email;
    const query = {hostEmail: email}
    const result = await Notice.find(query) 
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = teacherNotices;