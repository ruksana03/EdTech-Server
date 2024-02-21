const pdfResources = require("../../../../models/pdf")

const getPdf= async(req,res)=>{
    try {
        const result = await pdfResources.find() 
        res.send(result)
      } catch (error) {
         next(error)
      }
}

module.exports =  getPdf;