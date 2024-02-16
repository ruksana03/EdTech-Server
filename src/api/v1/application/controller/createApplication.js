const Application = require("../../../../models/application");


const createApplication = async (req, res, next) => {
    try {
        const applicationData = req.body;
        const newApplication = new Application({
            ...applicationData,
            status: "pending",
        });
        const result = await newApplication.save()
        res.send(result);
    } catch (error) {
        console.error("Error creating course:", error, next);
    }
}

module.exports = createApplication;