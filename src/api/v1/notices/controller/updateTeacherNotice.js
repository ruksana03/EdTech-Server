const { default: mongoose } = require("mongoose");
const Notice = require("../../../../models/NoticesT");

const updateTeacherNotice =  async (req, res) => {
    try {
      const updatedData = req.body;
        const id = req.params.id;
        
      // Validate if id is a valid ObjectId before creating the filter
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid ID");
      }
  
      const filter = { _id: id };
      const options = { upsert: true };
  
      const result = await Notice.updateOne(filter, { $set: updatedData }, options);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
}
module.exports = updateTeacherNotice;