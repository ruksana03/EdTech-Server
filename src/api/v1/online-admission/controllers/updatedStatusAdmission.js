const Application = require("../../../../models/application");

const updatedStatusAdmission = async (req, res, next) => {
    const id = req.params.id;

    try {
        const updatedApplication = await Application.findOneAndUpdate(
            { _id: id, status: { $ne: "selected" } },
            { $set: { status: "selected" } },
            { new: true } 
        );

        if (!updatedApplication) {
            return res.status(404).send("Course not found or already selected.");
        }
        res.send(updatedApplication);
    } catch (error) {
        console.error("Error updating course status:", error,next);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = updatedStatusAdmission;