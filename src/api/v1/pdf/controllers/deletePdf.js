const pdfResources = require("../../../../models/pdf");

const deletePdf = async (req, res) => {
    const pdfId = req.params.id;

    try {
        const result = await pdfResources.deleteOne({ _id:  pdfId  });
        res.send(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

}
module.exports = deletePdf