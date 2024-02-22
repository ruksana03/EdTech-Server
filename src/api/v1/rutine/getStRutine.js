const Rutine = require("../../../models/Rutine");


const getStRutine = async(req,res) => {
    try{
      const sentForCourse = req.query.forCourses;
      const query = {forCourses: sentForCourse}
      const result = await Rutine.find(query) 
      res.send(result);
    }
    catch(error) {
      console.log(error);
    }
}

module.exports = getStRutine;