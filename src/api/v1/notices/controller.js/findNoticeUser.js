const Notice = require("../../../../models/Notices");

const findNoticeUser = async(req,res) => {
    try{
      const email = req.query.email;
      const query = {email: email}
      // console.log('query email is here ====>',query);
      const result = await Notice.find(query) 
      res.send(result);
    }
    catch(error) {
      console.log(error);
    }
}
module.exports = findNoticeUser;