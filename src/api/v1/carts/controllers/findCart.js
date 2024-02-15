const Cart = require("../../../../models/Carts");

const findCart = async (req, res) => {
  const email = req.query.email;
  try {
    const result = await Cart.find({ email: email }).exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error); // Handle any errors
  }
};

module.exports = findCart;