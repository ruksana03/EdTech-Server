const Notice = require("../../../../models/NoticesT");

const findNoticeUser = async(req,res) => {
    try{
      const sentForCourse = req.query.sentForCourse;
      const query = {sentForCourse: sentForCourse}
      const result = await Notice.find(query) 
      res.send(result);
    }
    catch(error) {
      console.log(error);
    }
}
module.exports = findNoticeUser;