const Notice = require("../../../../models/NoticesA");

const createNoticeByAdmin = async(req,res,next) => {
    try{
      const noticeData = req.body;
      const result = await new Notice(noticeData).save();
      res.send(result);
    }
    catch(error){
      next(error);
    }
}
  
module.exports = createNoticeByAdmin;