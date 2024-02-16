const Application = require("../../../../models/application");


const findRequestedApplication = async(req,res) => {
    try {
        const result = await Application.find({ status: "selected" });
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = findRequestedApplication;