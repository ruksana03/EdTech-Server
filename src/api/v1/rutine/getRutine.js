const Rutine = require("../../../models/Rutine");
const moment = require('moment')
const getRutine = async (req, res) => {
    try {
        const result = await Rutine.find()
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = getRutine;
// {
//     start: { $gte: moment(req.query.start).toDate()},
//     end: { $lte: moment(req.query.end).toDate() }
// }