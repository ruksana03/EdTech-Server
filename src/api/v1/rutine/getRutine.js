const Rutine = require("../../../models/Rutine");
const getRutine = async (req, res) => {
    try {
        const result = await Rutine.find()
        res.send(result)
    } catch (error) {
        console.log(error);
    }
}
// {
//     start: { $gte: moment(req.query.start).toDate()},
//     end: { $lte: moment(req.query.end).toDate() }
// }
module.exports = getRutine;
