const Application = require("../../../../models/application");


const findAllApplication = async (req, res, next) => {
    try {
        const result = await Application.find()
        res.send(result)
    } catch (error) {
        next(error)
    }
}

module.exports = findAllApplication;