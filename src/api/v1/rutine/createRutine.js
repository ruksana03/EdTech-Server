const Rutine = require("../../../models/Rutine");

const createRutine = async (req, res, next) => {
  try {
    const rutineEvent = req.body;
    // console.log('data ami paici ok =========>', rutineEvent);
    const rutine = new Rutine(rutineEvent);
    const result = await rutine.save();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = createRutine;