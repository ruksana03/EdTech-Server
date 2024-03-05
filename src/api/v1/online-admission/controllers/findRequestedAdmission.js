const onlineAdmission = require("../../../../models/onlineAdmission");


const findRequestedAdmission = async(req,res) => {
    try {
        const result = await onlineAdmission.find({ status: "selected" });
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = findRequestedAdmission;