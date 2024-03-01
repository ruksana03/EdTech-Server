const Cover = require("../../../../models/cover");

const getCover = async (req, res,next) => {
    try {
      const result = await Cover.find() 
      res.send(result)
    } catch (error) {
     next(error);
    }
}

module.exports = getCover;