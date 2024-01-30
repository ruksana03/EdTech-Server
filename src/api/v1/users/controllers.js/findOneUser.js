const User = require("../../../../models/Users");

const findOneUser = async (req, res,next) => {
 try {
    const id = req.params.id;
    const result = await User.findById(id);
    res.send(result);
 } catch (error) {
    next(error)
 }
};

module.exports = findOneUser;