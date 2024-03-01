const Cover = require("../../../../models/cover");

const postCover = async (req, res) => {
    try {
        const cover = req.body;
        const newCover = new Cover(cover); 
        const result = await newCover.save(); 
        res.send(result); 
    } catch (error) {
        console.log("Error posting member:", error);
        res.status(500).send("Error posting member"); 
    }
};

module.exports = postCover;