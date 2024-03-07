const Feedback = require("../../../../models/feedback");

 const feedbackDetails = async (req,res, next) => {
    try{
      const id = req.params.id;
      const result = await Feedback.findById(id);
      res.send(result);
    }
  catch(error){
      console.log(error,next)
  }
  }

  module.exports = feedbackDetails