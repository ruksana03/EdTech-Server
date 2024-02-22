const Course = require("../../../../models/Courses");

const deleteCourse =  async (req, res) => {
    const courseId = req.params.id;
    try {
        const result = await Course.deleteOne({ _id: courseId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteCourse;