const Recorded = require("../../../../models/RecordedClass");

const findAllVideos = async (req, res) => {
    try {
        const result = await Recorded.find() 
        res.send(result)
      } catch (error) {
        console.log(error);
      }
}
module.exports = findAllVideos;