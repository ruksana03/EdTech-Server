

const Notice = require("../../../../models/NoticesA");

const findAllAdminNotice =  async (req, res) => {
    try {
      const result = await Notice.find() ;
      res.send(result);
    } catch (error) {
      console.log(error);
    }
}
  
module.exports = findAllAdminNotice;