const onlineAdmission = require("../../../../models/onlineAdmission");

const findOneAdmission = async (req,res, next) => {
  try{
    const id = req.params.id;
    const result = await onlineAdmission.findById(id);
    res.send(result);
  }
catch(error){
    console.log(error,next)
}
}

module.exports = findOneAdmission;