const Notice = require("../../../../models/Notices");

const findAllNotices =  async (req, res) => {
    try {
      const result = await Notice.find() 
      res.send(result)
    } catch (error) {
      console.log(error);
    }
}
  
module.exports = findAllNotices;