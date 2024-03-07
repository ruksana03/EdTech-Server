const Advertisement = require("../../../../models/advertisement");


const createAdvertisement = async(req,res)=>{
    try {
        const item = req.body;
        // console.log(item);
                const result = await new Advertisement(item).save();
                res.send(result)
    } catch (error) {
        console.log(error);
    }
}
module.exports = createAdvertisement;