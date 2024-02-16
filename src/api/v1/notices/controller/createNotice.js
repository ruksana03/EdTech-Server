const Notice = require("../../../../models/Notices");

const createNotice = async(req,res,next) => {
    try{
      const noticeData = req.body;
      const result = await new Notice(noticeData).save()
      res.send(result);
    }
    catch(error){
      next(error);
    }
}
  
module.exports = createNotice;