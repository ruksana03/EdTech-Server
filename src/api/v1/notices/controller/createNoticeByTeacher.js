const Notice = require("../../../../models/NoticesT");

const createNoticeByTeacher = async(req,res,next) => {
    try{
      const noticeData = req.body;
      const result = await new Notice(noticeData).save()
      res.send(result);
    }
    catch(error){
      next(error);
    }
}
  
module.exports = createNoticeByTeacher;