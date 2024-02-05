const Course = require("../../../../models/Courses");

 

const findApprovedCourses = async (req, res) => {
    try {
        const result = await Course.find({ status: "approved" });
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = findApprovedCourses;
