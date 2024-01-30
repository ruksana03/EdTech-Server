const Review = require("../../../../models/Reviews");

const findAllReview = async (req, res) => {
    try {
      const result = await Review.find() 
      res.send(result)
    } catch (error) {
      console.log(error);
    }
}
  
module.exports = findAllReview;