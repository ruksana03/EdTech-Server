const onlineAdmission = require("../../../../models/onlineAdmission");


const createAdmission = async (req, res, next) => {
    try {
        const onlineAdmissionData = req.body;
        const newAdmission = new onlineAdmission({
            ...onlineAdmissionData,
            status: "pending",
        });
        const result = await newAdmission.save()
        res.send(result);
    } catch (error) {
        console.error("Error creating course:", error, next);
    }
}

module.exports = createAdmission;