const Cart = require("../../../../models/Carts");

const deleteCart = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Cart.deleteOne({ _id: id }).exec();
      res.send(result);
    } catch (error) {
      res.status(500).send(error); // Handle any errors
    }
  }

module.exports = deleteCart;