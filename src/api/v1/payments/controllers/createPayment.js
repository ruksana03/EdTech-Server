require("dotenv").config();
const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY);

const createPayment = async (req, res,next) => {
   try {
    const { price } = req.body;
    const amount = parseInt(price * 100);
    if (!price || amount < 1) return;
    const { client_secret } = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send({ clientSecret: client_secret });
   } catch (error) {
    next(error)
   }
}

module.exports = createPayment;