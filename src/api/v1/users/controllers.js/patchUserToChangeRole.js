const User = require("../../../../models/Users");

const patchUserToChangeRole = async (req, res, next) => {
    try {
        const role = req.body.role;
        console.log("inside the patch", role);
        const id = req.params.id;
        console.log("inside the patch", id)
        const filter = { _id: id };
        const updatedDoc = {
            $set: {
                role: role
            }
        }
        const result = await User.updateOne(filter, updatedDoc);
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = patchUserToChangeRole;