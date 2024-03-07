const onlineAdmission = require("../../../../models/onlineAdmission");


const findAllOnlineAdmission = async (req, res, next) => {
    try {
        const result = await onlineAdmission.find()
        res.send(result)
    } catch (error) {
        next(error)
    }
}

module.exports = findAllOnlineAdmission;