const Offer = require("../../../models/offer");

const createOffer = async(req,res)=>{
    try {
        const item = req.body;
        console.log(item);
                const result = await new Offer(item).save();
                res.send(result)
    } catch (error) {
        console.log(error);
    }
}
module.exports = createOffer;