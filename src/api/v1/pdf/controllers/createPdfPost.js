const pdfResources = require("../../../../models/pdf");


const createPdfPost= async(req,res)=>{
    try {
        const item = req.body;
        console.log(item);
                const result = await new pdfResources(item).save();
                res.send(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = createPdfPost
