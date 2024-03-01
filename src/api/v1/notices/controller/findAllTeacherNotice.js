const Notice = require("../../../../models/NoticesT");

const findAllTeacherNotice =  async (req, res) => {
    try {
      const result = await Notice.find() ;
      res.send(result);
    } catch (error) {
      console.log(error);
    }
}
  
module.exports = findAllTeacherNotice;