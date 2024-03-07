const CourseVideo = require("../../../../models/courseVideo");

const addCourseVideo = async (req, res) => {
    try {
        const { title, courseId, videos } = req.body;
        const newCourseVideo = new CourseVideo({ title, courseId, videos });
        const result = await newCourseVideo.save();
        res.status(201).json(result);
    } catch (error) {
        console.error("Error adding course video:", error);
        res.status(500).json({ error: "Failed to add course video" });
    }
};

module.exports = addCourseVideo;
