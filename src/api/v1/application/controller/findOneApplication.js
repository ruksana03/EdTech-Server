const Application = require("../../../../models/application");


const findOneApplication = async (req,res, next) => {
  try{
    const id = req.params.id;
    const result = await Application.findById(id);
    res.send(result);
  }
catch(error){
    console.log(error,next)
}
}

module.exports = findOneApplication;