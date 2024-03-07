const CourseVideo = require("../../../../models/courseVideo");

const deleteCourseAllVideo =  async (req, res) => {
    const videoId = req.params.id;
    try {
        const result = await CourseVideo.deleteOne({ _id: videoId });
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = deleteCourseAllVideo;